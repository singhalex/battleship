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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cell-size: 30px;\n}\n\n* {\n  box-sizing: border-box;\n  font-size: 32px;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n\n.winning-message {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.winning-message.show {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yDAAyD;EACzD,sDAAsD;EACtD,iDAAiD;AACnD;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --cell-size: 30px;\n}\n\n* {\n  box-sizing: border-box;\n  font-size: 32px;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n\n.winning-message {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.winning-message.show {\n  display: flex;\n}\n"],"sourceRoot":""}]);
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
    const shipsCopy = [...ships];
    console.log(shipsCopy);
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
            let gameOver = checkWin();
            if (gameOver) return;
            setTimeout(() => {
                let results = cpu.cpuAttack(thePlayer.board);
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

                gameOver = checkWin();
                if (gameOver) return;
            }, 250);
        })
    }

    const winScreen = document.querySelector('#winning-message');
    function checkWin() {
        const winMessage = document.querySelector('#winning-text');
        if (thePlayer.board.allSunk()) {
            winScreen.classList.add('show');
            winMessage.textContent = 'Computer wins!';
            return true;
        }
        if (cpu.board.allSunk()) {
            winScreen.classList.add('show');
            winMessage.textContent = 'You win!'
            return true;
        }

        return false;

    }

    // Drag ships
    let draggedShip;
    for (const ship of ships) {
        ship.addEventListener('dragstart', dragstart)
    }

    function dragstart(e) {
        draggedShip = e.target;
    }

    const rebuildShips = () => {
        const shipsContainer = document.querySelector('#ships');
        shipsCopy.forEach(ship => {
            shipsContainer.appendChild(ship);

        })
    }
    
    return { buildGrid, rebuildShips }

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
let player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('Player');
let cpu = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('CPU');
cpu.board.randomizeShips();

ui.buildGrid(player);
ui.buildGrid(cpu);

const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
    document.querySelector('#player-board').innerHTML = '';
    document.querySelector('#cpu-board').innerHTML = '';
    player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('Player');
    cpu = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('CPU');
    cpu.board.randomizeShips();
    
    ui.buildGrid(player);
    ui.buildGrid(cpu);
    document.querySelector('#winning-message').classList.remove('show');
    ui.rebuildShips();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUM3S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCO0FBQ2I7O0FBRXJDLFdBQVcsa0RBQWE7QUFDeEIsYUFBYSwrREFBWTtBQUN6QixVQUFVLCtEQUFZO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUFZO0FBQ3pCLFVBQVUsK0RBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogMzBweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMTApO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtncmF5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyLWhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXFwwMGQ3XFxcIjtcXG4gIHRvcDogLTJweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXJhYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNzaGlwcyB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc2hpcHMgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG59XFxuXFxuI2NhcnJpZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4jY2Fycmllci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2JhdHRsZXNoaXAudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDQpO1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2Rlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNzdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuI3N1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNwYXRyb2wtYm9hdCB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5wYXRyb2wtYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiNwYXRyb2wtYm9hdC52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYmxvY2s6IDAuNXJlbTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogMzBweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMTApO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtncmF5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyLWhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXFwwMGQ3XFxcIjtcXG4gIHRvcDogLTJweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXJhYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdmVyYWJsZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNzaGlwcyB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jc2hpcHMgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG59XFxuXFxuI2NhcnJpZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4jY2Fycmllci52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDUpO1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2JhdHRsZXNoaXAudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDQpO1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2Rlc3Ryb3llci52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNzdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuI3N1Ym1hcmluZS52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxufVxcblxcbiNwYXRyb2wtYm9hdCB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5wYXRyb2wtYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiNwYXRyb2wtYm9hdC52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYmxvY2s6IDAuNXJlbTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgY29uc3QgaGVpZ2h0ID0gMTA7XG4gICAgY29uc3Qgc2hvdHMgPSBbXTtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKDUpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgyKTtcblxuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgc2hpcHMucHVzaChwYXRyb2xCb2F0KTtcbiAgICBzaGlwcy5wdXNoKHN1Ym1hcmluZSk7XG4gICAgc2hpcHMucHVzaChkZXN0cm95ZXIpO1xuICAgIHNoaXBzLnB1c2goYmF0dGxlc2hpcCk7XG4gICAgc2hpcHMucHVzaChjYXJyaWVyKTtcblxuICAgIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkod2lkdGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkW2ldID0gbmV3IEFycmF5KGhlaWdodClcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21pemVTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21Ib3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgICAgICAgICAgIHBsYWNlU2hpcCh4LCB5LCByYW5kb21Ib3Jpem9udGFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIGhvcml6b250YWwgPSB0cnVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwcy5wb3AoKTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgc2hpcCB3aWxsIGZpdCBvbiB0aGUgYm9hcmRcbiAgICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwICYmIGhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTAgJiYgaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7ICAgXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGVhY2ggc3F1YXJlIGZvciBzaGlwcyBiZWZvcmUgcGxhY2luZ1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbeCArIGldW3ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChncmlkW3hdW3kgKyBpXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGFjZSBzaGlwIG9uIHRoZSBib2FyZFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4eUFycmF5KSA9PiB7XG4gICAgICAgIGxldCBhbHJlYWR5SGl0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2VhcmNoIHRoZSBzaG90IGFycmF5IGZvciBwcmV2aW91cyBzaG90cyBhbmQgcmV0dXJuIG51bGwgaWYgZHVwbGljYXRlZFxuICAgICAgICBzaG90cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT0gSlNPTi5zdHJpbmdpZnkoeHlBcnJheSkpIHtcbiAgICAgICAgICAgICAgICBhbHJlYWR5SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFscmVhZHlIaXQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcGFjZSA9IGdyaWRbeHlBcnJheVswXV1beHlBcnJheVsxXV07XG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBzaG90IGxvY2F0aW9uXG4gICAgICAgIHNob3RzLnB1c2goeHlBcnJheSlcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBhIGhpdCBpZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIHNwYWNlXG4gICAgICAgIGN1cnJlbnRTcGFjZT8uaGl0KCk7XG4gICAgICAgIGlmIChjdXJyZW50U3BhY2U/LmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaChjdXJyZW50U3BhY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHN1bmtBbm5vdW5jZW1lbnQoY3VycmVudFNwYWNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3BhY2U/Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGBIaXQhYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTWlzcyEnXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHN1bmtBbm5vdW5jZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQ2FycmllciBzdW5rISc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAnQmF0dGxlc2hpcCBzdW5rISc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnRGVzdHJveWVyIHN1bmshJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuICdQYXRyb2wgQm9hdCBzdW5rISc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBncmlkLCBzaGlwcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCByYW5kb21pemVTaGlwcyB9XG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCB9IGZyb20gXCIuL2JvYXJkc1wiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGNvbnN0IGNwdUF0dGFjayA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goeCk7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goeSk7XG5cbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjcHVBdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyB4LCB5LCBhdHRhY2tSZXN1bHQgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjcHUsIHh5QXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNwdS5ib2FyZC5yZWNlaXZlQXR0YWNrKHh5QXJyYXkpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7bmFtZSwgYm9hcmQsIGNwdUF0dGFjaywgcGxheWVyQXR0YWNrfVxufSIsImV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCkgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaXRzID49IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IGxlbmd0aCwgZ2V0SGl0cywgaGl0LCBpc1N1bmt9XG59XG4iLCJleHBvcnQgY29uc3QgdXNlckludGVyZmFjZSA9ICgpID0+IHtcbiAgICBsZXQgdGhlUGxheWVyO1xuICAgIGxldCBjcHU7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcHMnKS5jaGlsZHJlbjtcbiAgICBjb25zdCBzaGlwc0NvcHkgPSBbLi4uc2hpcHNdO1xuICAgIGNvbnNvbGUubG9nKHNoaXBzQ29weSk7XG4gICAgY29uc3QgY3B1SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcHUtaW5mbycpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGFjZSB0aGUgQ2Fycmllcic7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZScpO1xuICAgIGxldCBkZWdyZWVzID0gMDtcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJvdGF0ZVNoaXBzKCk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJvdGF0ZVNoaXBzKCkge1xuICAgICAgICBkZWdyZWVzID0gZGVncmVlcyA9PT0gMCA/IDkwIDogMDtcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEdyaWQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ1BsYXllcicpIHRoZVBsYXllciA9IHBsYXllcjtcbiAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSAnQ1BVJykgY3B1ID0gcGxheWVyO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpfS1ib2FyZGApO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBsYXllci5ib2FyZC5ncmlkLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHBsYXllci5ib2FyZC5ncmlkW3hdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IHk7XG5cbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSAnQ1BVJykge1xuICAgICAgICAgICAgICAgICAgICBjcHVDbGlja0hhbmRsZXIoc3F1YXJlLCBwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BTaGlwKGUsIHBsYXllcilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wU2hpcChlLCBwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgZHJvcFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgZHJvcFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IGRlZ3JlZXMgPT09IDA7XG4gICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLnBsYWNlU2hpcChkcm9wWCwgZHJvcFksIGhvcml6b250YWwpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFpbnRTcXVhcmVzKGRyb3BYLCBkcm9wWSk7XG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNoaXAucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwc1swXS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgUGxhY2UgdGhlICR7c2hpcHNbMF0uaWR9YFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnVGltZSB0byBhdHRhY2shJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFpbnRTcXVhcmVzKHgsIHkpIHtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmlkID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dlZFNoaXAuaWQgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgfSBlbHNlIGlmKGRyYWdnZWRTaGlwLmlkID09PSAnZGVzdHJveWVyJyB8fCBkcmFnZ2VkU2hpcC5pZCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZ3JlZXMgPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApLmNsYXNzTGlzdC5hZGQoYCR7ZHJhZ2dlZFNoaXAuaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkZWdyZWVzID09PSA5MCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYCkuY2xhc3NMaXN0LmFkZChgJHtkcmFnZ2VkU2hpcC5pZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcHVDbGlja0hhbmRsZXIoc3F1YXJlLCBwbGF5ZXIpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyYWJsZScpXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICAgICAgY29uc3QgeHlBcnJheSA9IFt4LCB5XTtcbiAgICAgICAgICAgIGlmIChzaGlwcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMgZmlyc3QuJztcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4eUFycmF5KTtcbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdIaXQhJ1xuICAgICAgICAgICAgICAgIHx8IGF0dGFja1Jlc3VsdCA9PT0gJ1BhdHJvbCBCb2F0IHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IGF0dGFja1Jlc3VsdCA9PT0gJ0NhcnJpZXIgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgYXR0YWNrUmVzdWx0ID09PSAnQmF0dGxlc2hpcCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCBhdHRhY2tSZXN1bHQgPT09ICdEZXN0cm95ZXIgc3VuayEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnTWlzcyEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgIGxldCBnYW1lT3ZlciA9IGNoZWNrV2luKCk7XG4gICAgICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gY3B1LmNwdUF0dGFjayh0aGVQbGF5ZXIuYm9hcmQpO1xuICAgICAgICAgICAgICAgIGNwdUluZm8udGV4dENvbnRlbnQgPSByZXN1bHRzLmF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtyZXN1bHRzLnh9XCJdW2RhdGEteT1cIiR7cmVzdWx0cy55fVwiXWApXG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdIaXQhJ1xuICAgICAgICAgICAgICAgIHx8IHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnUGF0cm9sIEJvYXQgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgcmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdDYXJyaWVyIHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnQmF0dGxlc2hpcCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCByZXN1bHRzLmF0dGFja1Jlc3VsdCA9PT0gJ0Rlc3Ryb3llciBzdW5rIScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1oaXQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnTWlzcyEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnYW1lT3ZlciA9IGNoZWNrV2luKCk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHdpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uaW5nLW1lc3NhZ2UnKTtcbiAgICBmdW5jdGlvbiBjaGVja1dpbigpIHtcbiAgICAgICAgY29uc3Qgd2luTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uaW5nLXRleHQnKTtcbiAgICAgICAgaWYgKHRoZVBsYXllci5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5NZXNzYWdlLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIHdpbnMhJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcHUuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICB3aW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9ICdZb3Ugd2luISdcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgLy8gRHJhZyBzaGlwc1xuICAgIGxldCBkcmFnZ2VkU2hpcDtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0KGUpIHtcbiAgICAgICAgZHJhZ2dlZFNoaXAgPSBlLnRhcmdldDtcbiAgICB9XG5cbiAgICBjb25zdCByZWJ1aWxkU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXBzJyk7XG4gICAgICAgIHNoaXBzQ29weS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgYnVpbGRHcmlkLCByZWJ1aWxkU2hpcHMgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXInO1xuaW1wb3J0IHsgdXNlckludGVyZmFjZSB9IGZyb20gJy4vdWknO1xuXG5jb25zdCB1aSA9IHVzZXJJbnRlcmZhY2UoKTtcbmxldCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoJ1BsYXllcicpO1xubGV0IGNwdSA9IGNyZWF0ZVBsYXllcignQ1BVJyk7XG5jcHUuYm9hcmQucmFuZG9taXplU2hpcHMoKTtcblxudWkuYnVpbGRHcmlkKHBsYXllcik7XG51aS5idWlsZEdyaWQoY3B1KTtcblxuY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0LWJ1dHRvbicpO1xucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdS1ib2FyZCcpLmlubmVySFRNTCA9ICcnO1xuICAgIHBsYXllciA9IGNyZWF0ZVBsYXllcignUGxheWVyJyk7XG4gICAgY3B1ID0gY3JlYXRlUGxheWVyKCdDUFUnKTtcbiAgICBjcHUuYm9hcmQucmFuZG9taXplU2hpcHMoKTtcbiAgICBcbiAgICB1aS5idWlsZEdyaWQocGxheWVyKTtcbiAgICB1aS5idWlsZEdyaWQoY3B1KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmluZy1tZXNzYWdlJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIHVpLnJlYnVpbGRTaGlwcygpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==