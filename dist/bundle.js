/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cell-size: 15px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yDAAyD;EACzD,sDAAsD;EACtD,iDAAiD;AACnD;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":[":root {\n  --cell-size: 15px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/boards.js":
/*!*********************************!*\
  !*** ./src/factories/boards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/factories/ships.js");


const createBoard = () => {
    const width = 10;
    const height = 10;
    const shots = [];
    const sunkShips = [];

    const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(5);
    const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(4);
    const destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);
    const submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);
    const patrolBoat = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(2);

    const ships = [];
    ships.push(patrolBoat);
    ships.push(submarine);
    ships.push(destroyer);
    ships.push(battleship);
    ships.push(carrier);

    const grid = new Array(width);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(height)
    }

    const randomizeShips = () => {
        while (ships.length !== 0) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const randomHorizontal = Math.random() < 0.5;
            placeShip(x, y, randomHorizontal)
        }
    }

    const placeShip = (x, y, horizontal = true) => {
        const ship = ships.pop();

        // Check to see if ship will fit on the board
        if (x + ship.length > 10 && horizontal) {
            ships.push(ship);
            return null;
        }
        if (y + ship.length > 10 && horizontal === false) {
            ships.push(ship);   
            return null;
        }

        // Check each square for ships before placing
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                if (grid[x + i][y]) {
                    ships.push(ship);
                    return null;
                }
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                if (grid[x][y + i]) {
                    ships.push(ship);
                    return null;
                }
            }
        }

        // Place ship on the board
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                grid[x + i][y] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                grid[x][y + i] = ship;
            }
        }
    }

    const receiveAttack = (xyArray) => {
        let alreadyHit = false;

        // Search the shot array for previous shots and return null if duplicated
        shots.forEach((element) => {
            if (JSON.stringify(element) == JSON.stringify(xyArray)) {
                alreadyHit = true;
            }
        })
        if (alreadyHit) return null;

        const currentSpace = grid[xyArray[0]][xyArray[1]];

        // Record the shot location
        shots.push(xyArray)
        
        // Add a hit if there is a ship at the space
        currentSpace?.hit();
        if (currentSpace?.isSunk()) {
            sunkShips.push(currentSpace);
            return sunkAnnouncement(currentSpace);
        } else if (currentSpace?.length) {
            return `Hit!`;
        } else {
            return 'Miss!'
        }
    }


    const sunkAnnouncement = (ship) => {
        if (ship.length === 5) {
            return 'Carrier sunk!';
        } else if (ship.length === 4) {
            return 'Battleship sunk!';
        } else if (ship.length === 3) {
            return 'Destroyer sunk!';
        } else if (ship.length === 2) {
            return 'Patrol Boat sunk!';
        }

    }

    const allSunk = () => {
        if (sunkShips.length === 5) return true;
        return false;
    };

    return { grid, ships, placeShip, receiveAttack, allSunk, randomizeShips }

}

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _boards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boards */ "./src/factories/boards.js");


const createPlayer = (name) => {
    const board = (0,_boards__WEBPACK_IMPORTED_MODULE_0__.createBoard)();

    const cpuAttack = (enemyBoard) => {
        const coordinates = [];
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        
        coordinates.push(x);
        coordinates.push(y);

        const attackResult = enemyBoard.receiveAttack(coordinates);
        
        if (attackResult === null) {
            return cpuAttack(enemyBoard);
        } else {
            return { x, y, attackResult };
        }
    }

    const playerAttack = (cpu, xyArray) => {
        return cpu.board.receiveAttack(xyArray);
    }
    

    return {name, board, cpuAttack, playerAttack}
}

/***/ }),

/***/ "./src/factories/ships.js":
/*!********************************!*\
  !*** ./src/factories/ships.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
const createShip = (length) => {
    let hits = 0;
    const getHits = () => hits;
    const hit = () => {
        hits += 1;
    }

    const isSunk = () => {
        if (hits >= length) {
            return true;
        } else {
            return false;
        }
    };
    return { length, getHits, hit, isSunk}
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userInterface": () => (/* binding */ userInterface)
/* harmony export */ });
const userInterface = () => {
    let thePlayer;
    let cpu;
    const ships = document.querySelector('#ships').children;
    const cpuInfo = document.querySelector('#cpu-info');
    const message = document.querySelector('span');
    message.textContent = 'Place the Carrier';
    const rotateButton = document.querySelector('#rotate');
    let degrees = 0;
    rotateButton.addEventListener('click', () => {
        rotateShips();
    })

    function rotateShips() {
        degrees = degrees === 0 ? 90 : 0;
        for (const ship of ships) {
            ship.classList.toggle('vertical');
        }
    }

    const buildGrid = (player) => {
        if (player.name === 'Player') thePlayer = player;
        if (player.name === 'CPU') cpu = player;
        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                square.dataset.x = x;
                square.dataset.y = y;

                square.className = 'square';
                if (player.name === 'CPU') {
                    cpuClickHandler(square, player);
                }

                if (player.name === 'Player') {
                    square.addEventListener('dragover', (e) => {
                        e.preventDefault();
                    });
                    square.addEventListener('drop', (e) => {
                        dropShip(e, player)
                    });

                }
                container.appendChild(square);
            }
        }
    }

    function dropShip(e, player) {
        const dropX = Number(e.target.dataset.x);
        const dropY = Number(e.target.dataset.y);
        const horizontal = degrees === 0;
            if (player.board.placeShip(dropX, dropY, horizontal) !== null) {
                paintSquares(dropX, dropY);
                draggedShip.remove();
                if (ships.length !== 0) {
                    ships[0].setAttribute('draggable', true)
                    message.textContent = `Place the ${ships[0].id}`
                } else {
                    message.textContent = 'Time to attack!'
                }
            };
    }

    function paintSquares(x, y) {
        let length;
        if (draggedShip.id === 'carrier') {
            length = 5;
        } else if (draggedShip.id === 'battleship') {
            length = 4;
        } else if(draggedShip.id === 'destroyer' || draggedShip.id === 'submarine') {
            length = 3;
        } else {
            length = 2;
        }

        if (degrees === 0) {
            for (let i = 0; i < length; i++) {
                document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`).classList.add(`${draggedShip.id}`)
            }
        } else if (degrees === 90) {
            for (let i = 0; i < length; i++) {
                document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`).classList.add(`${draggedShip.id}`)
            }
            
        }
    }

    function cpuClickHandler(square, player) {
        square.classList.add('hoverable')
        square.addEventListener('click', () => {
            const x = Number(square.dataset.x);
            const y = Number(square.dataset.y);
            const xyArray = [x, y];
            if (ships.length !== 0) {
                message.textContent = 'Place your ships first.';
                return
            };
            const attackResult = player.board.receiveAttack(xyArray);
            if (attackResult === 'Hit!'
                || attackResult === 'Patrol Boat sunk!'
                || attackResult === 'Carrier sunk!'
                || attackResult === 'Battleship sunk!'
                || attackResult === 'Destroyer sunk!') {
                    square.classList.add('hit')
                } else if (attackResult === 'Miss!') {
                    square.classList.add('miss')
                } else if (attackResult === null) return;
            message.textContent = attackResult;
            // checkWin();
            setTimeout(() => {
                let results = cpu.cpuAttack(thePlayer.board);
                console.log(results);
                cpuInfo.textContent = results.attackResult;
                const playerSquare = document.querySelector(`[data-x="${results.x}"][data-y="${results.y}"]`)

                if (results.attackResult === 'Hit!'
                || results.attackResult === 'Patrol Boat sunk!'
                || results.attackResult === 'Carrier sunk!'
                || results.attackResult === 'Battleship sunk!'
                || results.attackResult === 'Destroyer sunk!') {
                    playerSquare.classList.add('player-hit');
                } else if (results.attackResult === 'Miss!') {
                    playerSquare.classList.add('miss')
                }

                // checkWin();
            }, 500);
        })
    }

    // Drag ships
    let draggedShip;
    for (const ship of ships) {
        ship.addEventListener('dragstart', dragstart)
    }

    function dragstart(e) {
        draggedShip = e.target;
    }
    
    return { buildGrid }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const ui = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.userInterface)();
const player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('Player');
const cpu = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('CPU');
cpu.board.randomizeShips();

ui.buildGrid(player);
ui.buildGrid(cpu);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEMsbURBQW1ELEVBQUUsYUFBYSxNQUFNLHNCQUFzQixlQUFlO0FBQzdHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFVBQVUsYUFBYSxVQUFVOztBQUV6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7Ozs7OztVQ2hKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkI7QUFDYjs7QUFFckMsV0FBVyxrREFBYTtBQUN4QixlQUFlLCtEQUFZO0FBQzNCLFlBQVksK0RBQVk7QUFDeEI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogMTVweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMTApO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtncmF5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyLWhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXFwwMGQ3XFxcIjtcXG4gIHRvcDogLTJweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXJhYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNzaGlwcyB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc2hpcHMgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG59XFxuXFxuI2NhcnJpZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4jY2Fycmllci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2JhdHRsZXNoaXAudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDQpO1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2Rlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNzdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuI3N1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNwYXRyb2wtYm9hdCB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5wYXRyb2wtYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiNwYXRyb2wtYm9hdC52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYmxvY2s6IDAuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseURBQXlEO0VBQ3pELHNEQUFzRDtFQUN0RCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jZWxsLXNpemU6IDE1cHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2JvYXJkcy1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDEwKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMTApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBkYXJrZ3JheTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllci1oaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBkN1xcXCI7XFxuICB0b3A6IC0ycHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhvdmVyYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jc2hpcHMge1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI3NoaXBzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDM3LCAxNzMsIDE2MiwgMSk7XFxufVxcblxcbiNjYXJyaWVyIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uY2FycmllciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuI2NhcnJpZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA1KTtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJhdHRsZXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNiYXR0bGVzaGlwLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcXG59XFxuXFxuI2Rlc3Ryb3llciB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZGVzdHJveWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNkZXN0cm95ZXIudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbn1cXG5cXG4jc3VibWFyaW5lIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnN1Ym1hcmluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNzdWJtYXJpbmUudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbn1cXG5cXG4jcGF0cm9sLWJvYXQge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4ucGF0cm9sLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4jcGF0cm9sLWJvYXQudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSAxMDtcbiAgICBjb25zdCBoZWlnaHQgPSAxMDtcbiAgICBjb25zdCBzaG90cyA9IFtdO1xuICAgIGNvbnN0IHN1bmtTaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgY2FycmllciA9IGNyZWF0ZVNoaXAoNSk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBzaGlwcy5wdXNoKHBhdHJvbEJvYXQpO1xuICAgIHNoaXBzLnB1c2goc3VibWFyaW5lKTtcbiAgICBzaGlwcy5wdXNoKGRlc3Ryb3llcik7XG4gICAgc2hpcHMucHVzaChiYXR0bGVzaGlwKTtcbiAgICBzaGlwcy5wdXNoKGNhcnJpZXIpO1xuXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheSh3aWR0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoaGVpZ2h0KVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWl6ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUhvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgICAgICAgcGxhY2VTaGlwKHgsIHksIHJhbmRvbUhvcml6b250YWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgaG9yaXpvbnRhbCA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzLnBvcCgpO1xuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBzaGlwIHdpbGwgZml0IG9uIHRoZSBib2FyZFxuICAgICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gMTAgJiYgaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgc2hpcC5sZW5ndGggPiAxMCAmJiBob3Jpem9udGFsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTsgICBcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzcXVhcmUgZm9yIHNoaXBzIGJlZm9yZSBwbGFjaW5nXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZFt4ICsgaV1beV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbeF1beSArIGldKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsYWNlIHNoaXAgb24gdGhlIGJvYXJkXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBncmlkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHh5QXJyYXkpID0+IHtcbiAgICAgICAgbGV0IGFscmVhZHlIaXQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZWFyY2ggdGhlIHNob3QgYXJyYXkgZm9yIHByZXZpb3VzIHNob3RzIGFuZCByZXR1cm4gbnVsbCBpZiBkdXBsaWNhdGVkXG4gICAgICAgIHNob3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShlbGVtZW50KSA9PSBKU09OLnN0cmluZ2lmeSh4eUFycmF5KSkge1xuICAgICAgICAgICAgICAgIGFscmVhZHlIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoYWxyZWFkeUhpdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFNwYWNlID0gZ3JpZFt4eUFycmF5WzBdXVt4eUFycmF5WzFdXTtcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIHNob3QgbG9jYXRpb25cbiAgICAgICAgc2hvdHMucHVzaCh4eUFycmF5KVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGEgaGl0IGlmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGUgc3BhY2VcbiAgICAgICAgY3VycmVudFNwYWNlPy5oaXQoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTcGFjZT8uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGN1cnJlbnRTcGFjZSk7XG4gICAgICAgICAgICByZXR1cm4gc3Vua0Fubm91bmNlbWVudChjdXJyZW50U3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTcGFjZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYEhpdCFgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdNaXNzISdcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3Qgc3Vua0Fubm91bmNlbWVudCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuICdDYXJyaWVyIHN1bmshJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuICdCYXR0bGVzaGlwIHN1bmshJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdEZXN0cm95ZXIgc3VuayEnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1BhdHJvbCBCb2F0IHN1bmshJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN1bmtTaGlwcy5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdyaWQsIHNoaXBzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIHJhbmRvbWl6ZVNoaXBzIH1cblxufSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vYm9hcmRzXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgY29uc3QgY3B1QXR0YWNrID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh4KTtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh5KTtcblxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNwdUF0dGFjayhlbmVteUJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHgsIHksIGF0dGFja1Jlc3VsdCB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyQXR0YWNrID0gKGNwdSwgeHlBcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gY3B1LmJvYXJkLnJlY2VpdmVBdHRhY2soeHlBcnJheSk7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtuYW1lLCBib2FyZCwgY3B1QXR0YWNrLCBwbGF5ZXJBdHRhY2t9XG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBnZXRIaXRzLCBoaXQsIGlzU3Vua31cbn1cbiIsImV4cG9ydCBjb25zdCB1c2VySW50ZXJmYWNlID0gKCkgPT4ge1xuICAgIGxldCB0aGVQbGF5ZXI7XG4gICAgbGV0IGNwdTtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwcycpLmNoaWxkcmVuO1xuICAgIGNvbnN0IGNwdUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3B1LWluZm8nKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnUGxhY2UgdGhlIENhcnJpZXInO1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKTtcbiAgICBsZXQgZGVncmVlcyA9IDA7XG4gICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByb3RhdGVTaGlwcygpO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByb3RhdGVTaGlwcygpIHtcbiAgICAgICAgZGVncmVlcyA9IGRlZ3JlZXMgPT09IDAgPyA5MCA6IDA7XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRHcmlkID0gKHBsYXllcikgPT4ge1xuICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09ICdQbGF5ZXInKSB0aGVQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ0NQVScpIGNwdSA9IHBsYXllcjtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKX0tYm9hcmRgKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwbGF5ZXIuYm9hcmQuZ3JpZC5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwbGF5ZXIuYm9hcmQuZ3JpZFt4XS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ0NQVScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3B1Q2xpY2tIYW5kbGVyKHNxdWFyZSwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09ICdQbGF5ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wU2hpcChlLCBwbGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcFNoaXAoZSwgcGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRyb3BYID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICAgIGNvbnN0IGRyb3BZID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBkZWdyZWVzID09PSAwO1xuICAgICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAoZHJvcFgsIGRyb3BZLCBob3Jpem9udGFsKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhaW50U3F1YXJlcyhkcm9wWCwgZHJvcFkpO1xuICAgICAgICAgICAgICAgIGRyYWdnZWRTaGlwLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbMF0uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYWNlIHRoZSAke3NoaXBzWzBdLmlkfWBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1RpbWUgdG8gYXR0YWNrISdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhaW50U3F1YXJlcyh4LCB5KSB7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIGlmIChkcmFnZ2VkU2hpcC5pZCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICAgICAgICBsZW5ndGggPSA1O1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnZWRTaGlwLmlkID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICAgIH0gZWxzZSBpZihkcmFnZ2VkU2hpcC5pZCA9PT0gJ2Rlc3Ryb3llcicgfHwgZHJhZ2dlZFNoaXAuaWQgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWdyZWVzID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKS5jbGFzc0xpc3QuYWRkKGAke2RyYWdnZWRTaGlwLmlkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGVncmVlcyA9PT0gOTApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApLmNsYXNzTGlzdC5hZGQoYCR7ZHJhZ2dlZFNoaXAuaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3B1Q2xpY2tIYW5kbGVyKHNxdWFyZSwgcGxheWVyKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcmFibGUnKVxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgICAgIGNvbnN0IHh5QXJyYXkgPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzIGZpcnN0Lic7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeHlBcnJheSk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnSGl0ISdcbiAgICAgICAgICAgICAgICB8fCBhdHRhY2tSZXN1bHQgPT09ICdQYXRyb2wgQm9hdCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCBhdHRhY2tSZXN1bHQgPT09ICdDYXJyaWVyIHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IGF0dGFja1Jlc3VsdCA9PT0gJ0JhdHRsZXNoaXAgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgYXR0YWNrUmVzdWx0ID09PSAnRGVzdHJveWVyIHN1bmshJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ01pc3MhJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICAvLyBjaGVja1dpbigpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBjcHUuY3B1QXR0YWNrKHRoZVBsYXllci5ib2FyZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgY3B1SW5mby50ZXh0Q29udGVudCA9IHJlc3VsdHMuYXR0YWNrUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3Jlc3VsdHMueH1cIl1bZGF0YS15PVwiJHtyZXN1bHRzLnl9XCJdYClcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmF0dGFja1Jlc3VsdCA9PT0gJ0hpdCEnXG4gICAgICAgICAgICAgICAgfHwgcmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdQYXRyb2wgQm9hdCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCByZXN1bHRzLmF0dGFja1Jlc3VsdCA9PT0gJ0NhcnJpZXIgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgcmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdCYXR0bGVzaGlwIHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnRGVzdHJveWVyIHN1bmshJykge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLWhpdCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdNaXNzIScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrV2luKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIERyYWcgc2hpcHNcbiAgICBsZXQgZHJhZ2dlZFNoaXA7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ3N0YXJ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydChlKSB7XG4gICAgICAgIGRyYWdnZWRTaGlwID0gZS50YXJnZXQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGJ1aWxkR3JpZCB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gJy4vZmFjdG9yaWVzL3BsYXllcic7XG5pbXBvcnQgeyB1c2VySW50ZXJmYWNlIH0gZnJvbSAnLi91aSc7XG5cbmNvbnN0IHVpID0gdXNlckludGVyZmFjZSgpO1xuY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKCdQbGF5ZXInKTtcbmNvbnN0IGNwdSA9IGNyZWF0ZVBsYXllcignQ1BVJyk7XG5jcHUuYm9hcmQucmFuZG9taXplU2hpcHMoKTtcblxudWkuYnVpbGRHcmlkKHBsYXllcik7XG51aS5idWlsZEdyaWQoY3B1KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==