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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cell-size: 30px;\n}\n\n* {\n  box-sizing: border-box;\n  font-size: 32px;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n/* Add x symbol to squares when hit */\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n\n/* Full screen message hidden by default */\n.winning-message {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* Makes the full screen message visible */\n.winning-message.show {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA,qCAAqC;AACrC;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,yDAAyD;EACzD,sDAAsD;EACtD,iDAAiD;AACnD;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,oBAAoB;AACtB;;AAEA,0CAA0C;AAC1C;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA,0CAA0C;AAC1C;EACE,aAAa;AACf","sourcesContent":[":root {\n  --cell-size: 30px;\n}\n\n* {\n  box-sizing: border-box;\n  font-size: 32px;\n}\n\n#boards-container {\n  max-width: calc(var(--cell-size) * 22);\n  display: flex;\n  justify-content: space-between;\n  gap: var(--cell-size);\n  flex-wrap: wrap;\n}\n\n.board {\n  width: calc(var(--cell-size) * 10);\n  height: calc(var(--cell-size) * 10);\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.square {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: gray;\n  border: solid 1px darkgray;\n  position: relative;\n}\n\n/* Add x symbol to squares when hit */\n.player-hit::after {\n  position: absolute;\n  content: \"\\00d7\";\n  top: -2px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.miss {\n  background-color: darkblue;\n}\n\n.hit {\n  background-color: red;\n}\n\n.hoverable {\n  cursor: pointer;\n}\n\n.hoverable:hover {\n  opacity: 0.8;\n}\n\n#ships {\n  max-width: calc(var(--cell-size) * 22);\n  background-color: lightgray;\n  padding: var(--cell-size);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#ships > div:first-child {\n  cursor: pointer;\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n  box-shadow: 0px 0px 5px 5px rgba(37, 173, 162, 1);\n}\n\n#carrier {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 5);\n  background-color: brown;\n}\n\n.carrier {\n  background-color: brown;\n}\n\n#carrier.vertical {\n  height: calc(var(--cell-size) * 5);\n  width: var(--cell-size);\n}\n\n#battleship {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 4);\n  background-color: green;\n}\n\n.battleship {\n  background-color: green;\n}\n\n#battleship.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 4);\n}\n\n#destroyer {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: blue;\n}\n\n.destroyer {\n  background-color: blue;\n}\n\n#destroyer.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#submarine {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 3);\n  background-color: yellow;\n}\n\n.submarine {\n  background-color: yellow;\n}\n\n#submarine.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 3);\n}\n\n#patrol-boat {\n  height: var(--cell-size);\n  width: calc(var(--cell-size) * 2);\n  background-color: purple;\n}\n\n.patrol-boat {\n  background-color: purple;\n}\n\n#patrol-boat.vertical {\n  width: var(--cell-size);\n  height: calc(var(--cell-size) * 2);\n}\n\nbutton {\n  margin-block: 0.5rem;\n}\n\n/* Full screen message hidden by default */\n.winning-message {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n/* Makes the full screen message visible */\n.winning-message.show {\n  display: flex;\n}\n"],"sourceRoot":""}]);
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

    // Track the ships in an array
    const ships = [];
    ships.push(patrolBoat);
    ships.push(submarine);
    ships.push(destroyer);
    ships.push(battleship);
    ships.push(carrier);

    // Create a 2d grid
    const grid = new Array(width);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(height)
    }

    // Place ships randomly on the grid
    const randomizeShips = () => {
        while (ships.length !== 0) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const randomHorizontal = Math.random() < 0.5;
            placeShip(x, y, randomHorizontal)
        }
    }

    // Manually place ships
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
    // Draggable ship elements
    const ships = document.querySelector('#ships').children;
    // Keep a copy to re-add them when starting a new game
    const shipsCopy = [...ships];

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
        // Assign the player objects
        if (player.name === 'Player') thePlayer = player;
        if (player.name === 'CPU') cpu = player;

        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                // Give x y coordinates to div's
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
        // Grab x y coordinates from square being dragged over
        const dropX = Number(e.target.dataset.x);
        const dropY = Number(e.target.dataset.y);
        // Gets true if horizontal, false if vertical
        const horizontal = degrees === 0;

        if (player.board.placeShip(dropX, dropY, horizontal) !== null) {
            paintSquares(dropX, dropY);
            draggedShip.remove();
            // Makes the next ship draggable
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

        // Add the ship name to the class of the div on the board to apply the correct color
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

            // Set a small delay on cpu attack
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




//Initialize the boards and build the grids
const ui = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.userInterface)();
let player = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('Player');
let cpu = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('CPU');
cpu.board.randomizeShips();

ui.buildGrid(player);
ui.buildGrid(cpu);

// Re-initialize the game state
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7O1VDL0tBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM2QjtBQUNiOztBQUVyQztBQUNBLFdBQVcsa0RBQWE7QUFDeEIsYUFBYSwrREFBWTtBQUN6QixVQUFVLCtEQUFZO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBQVk7QUFDekIsVUFBVSwrREFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2VsbC1zaXplOiAzMHB4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDEwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZGFya2dyYXk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEFkZCB4IHN5bWJvbCB0byBzcXVhcmVzIHdoZW4gaGl0ICovXFxuLnBsYXllci1oaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBkN1xcXCI7XFxuICB0b3A6IC0ycHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhvdmVyYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jc2hpcHMge1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI3NoaXBzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMzcsIDE3MywgMTYyLCAxKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDM3LCAxNzMsIDE2MiwgMSk7XFxufVxcblxcbiNjYXJyaWVyIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uY2FycmllciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuI2NhcnJpZXIudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA1KTtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJhdHRsZXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNiYXR0bGVzaGlwLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiA0KTtcXG59XFxuXFxuI2Rlc3Ryb3llciB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZGVzdHJveWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNkZXN0cm95ZXIudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbn1cXG5cXG4jc3VibWFyaW5lIHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnN1Ym1hcmluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNzdWJtYXJpbmUudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbn1cXG5cXG4jcGF0cm9sLWJvYXQge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4ucGF0cm9sLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4jcGF0cm9sLWJvYXQudmVydGljYWwge1xcbiAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luLWJsb2NrOiAwLjVyZW07XFxufVxcblxcbi8qIEZ1bGwgc2NyZWVuIG1lc3NhZ2UgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4ud2lubmluZy1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTWFrZXMgdGhlIGZ1bGwgc2NyZWVuIG1lc3NhZ2UgdmlzaWJsZSAqL1xcbi53aW5uaW5nLW1lc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogMzBweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDIyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMTApO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtncmF5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBBZGQgeCBzeW1ib2wgdG8gc3F1YXJlcyB3aGVuIGhpdCAqL1xcbi5wbGF5ZXItaGl0OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcXDAwZDdcXFwiO1xcbiAgdG9wOiAtMnB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3ZlcmFibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI3NoaXBzIHtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNzaGlwcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDM3LCAxNzMsIDE2MiwgMSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDM3LCAxNzMsIDE2MiwgMSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgzNywgMTczLCAxNjIsIDEpO1xcbn1cXG5cXG4jY2FycmllciB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbiNjYXJyaWVyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNSk7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5iYXR0bGVzaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jYmF0dGxlc2hpcC52ZXJ0aWNhbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogNCk7XFxufVxcblxcbiNkZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbC1zaXplKSAqIDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmRlc3Ryb3llciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jZGVzdHJveWVyLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG59XFxuXFxuI3N1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jZWxsLXNpemUpICogMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zdWJtYXJpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jc3VibWFyaW5lLnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAzKTtcXG59XFxuXFxuI3BhdHJvbC1ib2F0IHtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLnBhdHJvbC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuI3BhdHJvbC1ib2F0LnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAyKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1ibG9jazogMC41cmVtO1xcbn1cXG5cXG4vKiBGdWxsIHNjcmVlbiBtZXNzYWdlIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLndpbm5pbmctbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1ha2VzIHRoZSBmdWxsIHNjcmVlbiBtZXNzYWdlIHZpc2libGUgKi9cXG4ud2lubmluZy1tZXNzYWdlLnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgIGNvbnN0IHNob3RzID0gW107XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gW107XG5cbiAgICBjb25zdCBjYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlU2hpcCg0KTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IGNyZWF0ZVNoaXAoMik7XG5cbiAgICAvLyBUcmFjayB0aGUgc2hpcHMgaW4gYW4gYXJyYXlcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIHNoaXBzLnB1c2gocGF0cm9sQm9hdCk7XG4gICAgc2hpcHMucHVzaChzdWJtYXJpbmUpO1xuICAgIHNoaXBzLnB1c2goZGVzdHJveWVyKTtcbiAgICBzaGlwcy5wdXNoKGJhdHRsZXNoaXApO1xuICAgIHNoaXBzLnB1c2goY2Fycmllcik7XG5cbiAgICAvLyBDcmVhdGUgYSAyZCBncmlkXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBBcnJheSh3aWR0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoaGVpZ2h0KVxuICAgIH1cblxuICAgIC8vIFBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIHRoZSBncmlkXG4gICAgY29uc3QgcmFuZG9taXplU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChzaGlwcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tSG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAgICAgICBwbGFjZVNoaXAoeCwgeSwgcmFuZG9tSG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hbnVhbGx5IHBsYWNlIHNoaXBzXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIGhvcml6b250YWwgPSB0cnVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwcy5wb3AoKTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgc2hpcCB3aWxsIGZpdCBvbiB0aGUgYm9hcmRcbiAgICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwICYmIGhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTAgJiYgaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7ICAgXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGVhY2ggc3F1YXJlIGZvciBzaGlwcyBiZWZvcmUgcGxhY2luZ1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbeCArIGldW3ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChncmlkW3hdW3kgKyBpXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGFjZSBzaGlwIG9uIHRoZSBib2FyZFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4eUFycmF5KSA9PiB7XG4gICAgICAgIGxldCBhbHJlYWR5SGl0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2VhcmNoIHRoZSBzaG90IGFycmF5IGZvciBwcmV2aW91cyBzaG90cyBhbmQgcmV0dXJuIG51bGwgaWYgZHVwbGljYXRlZFxuICAgICAgICBzaG90cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkgPT0gSlNPTi5zdHJpbmdpZnkoeHlBcnJheSkpIHtcbiAgICAgICAgICAgICAgICBhbHJlYWR5SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFscmVhZHlIaXQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcGFjZSA9IGdyaWRbeHlBcnJheVswXV1beHlBcnJheVsxXV07XG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBzaG90IGxvY2F0aW9uXG4gICAgICAgIHNob3RzLnB1c2goeHlBcnJheSlcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBhIGhpdCBpZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIHNwYWNlXG4gICAgICAgIGN1cnJlbnRTcGFjZT8uaGl0KCk7XG4gICAgICAgIGlmIChjdXJyZW50U3BhY2U/LmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaChjdXJyZW50U3BhY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHN1bmtBbm5vdW5jZW1lbnQoY3VycmVudFNwYWNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3BhY2U/Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGBIaXQhYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTWlzcyEnXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHN1bmtBbm5vdW5jZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoc2hpcC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQ2FycmllciBzdW5rISc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAnQmF0dGxlc2hpcCBzdW5rISc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnRGVzdHJveWVyIHN1bmshJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuICdQYXRyb2wgQm9hdCBzdW5rISc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBncmlkLCBzaGlwcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCByYW5kb21pemVTaGlwcyB9XG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCB9IGZyb20gXCIuL2JvYXJkc1wiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGNvbnN0IGNwdUF0dGFjayA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goeCk7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goeSk7XG5cbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjcHVBdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyB4LCB5LCBhdHRhY2tSZXN1bHQgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjcHUsIHh5QXJyYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNwdS5ib2FyZC5yZWNlaXZlQXR0YWNrKHh5QXJyYXkpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7bmFtZSwgYm9hcmQsIGNwdUF0dGFjaywgcGxheWVyQXR0YWNrfVxufSIsImV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCkgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaXRzID49IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IGxlbmd0aCwgZ2V0SGl0cywgaGl0LCBpc1N1bmt9XG59XG4iLCJleHBvcnQgY29uc3QgdXNlckludGVyZmFjZSA9ICgpID0+IHtcbiAgICBsZXQgdGhlUGxheWVyO1xuICAgIGxldCBjcHU7XG4gICAgLy8gRHJhZ2dhYmxlIHNoaXAgZWxlbWVudHNcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwcycpLmNoaWxkcmVuO1xuICAgIC8vIEtlZXAgYSBjb3B5IHRvIHJlLWFkZCB0aGVtIHdoZW4gc3RhcnRpbmcgYSBuZXcgZ2FtZVxuICAgIGNvbnN0IHNoaXBzQ29weSA9IFsuLi5zaGlwc107XG5cbiAgICBjb25zdCBjcHVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdS1pbmZvJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsYWNlIHRoZSBDYXJyaWVyJztcbiAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlJyk7XG4gICAgbGV0IGRlZ3JlZXMgPSAwO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcm90YXRlU2hpcHMoKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XG4gICAgICAgIGRlZ3JlZXMgPSBkZWdyZWVzID09PSAwID8gOTAgOiAwO1xuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgndmVydGljYWwnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkR3JpZCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gQXNzaWduIHRoZSBwbGF5ZXIgb2JqZWN0c1xuICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09ICdQbGF5ZXInKSB0aGVQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ0NQVScpIGNwdSA9IHBsYXllcjtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpfS1ib2FyZGApO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBsYXllci5ib2FyZC5ncmlkLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHBsYXllci5ib2FyZC5ncmlkW3hdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gR2l2ZSB4IHkgY29vcmRpbmF0ZXMgdG8gZGl2J3NcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0geDtcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0geTtcblxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09ICdDUFUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdUNsaWNrSGFuZGxlcihzcXVhcmUsIHBsYXllcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcFNoaXAoZSwgcGxheWVyKVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3BTaGlwKGUsIHBsYXllcikge1xuICAgICAgICAvLyBHcmFiIHggeSBjb29yZGluYXRlcyBmcm9tIHNxdWFyZSBiZWluZyBkcmFnZ2VkIG92ZXJcbiAgICAgICAgY29uc3QgZHJvcFggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgZHJvcFkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC55KTtcbiAgICAgICAgLy8gR2V0cyB0cnVlIGlmIGhvcml6b250YWwsIGZhbHNlIGlmIHZlcnRpY2FsXG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBkZWdyZWVzID09PSAwO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKGRyb3BYLCBkcm9wWSwgaG9yaXpvbnRhbCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhaW50U3F1YXJlcyhkcm9wWCwgZHJvcFkpO1xuICAgICAgICAgICAgZHJhZ2dlZFNoaXAucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBNYWtlcyB0aGUgbmV4dCBzaGlwIGRyYWdnYWJsZVxuICAgICAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHNoaXBzWzBdLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYWNlIHRoZSAke3NoaXBzWzBdLmlkfWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdUaW1lIHRvIGF0dGFjayEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFpbnRTcXVhcmVzKHgsIHkpIHtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmlkID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDU7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dlZFNoaXAuaWQgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgbGVuZ3RoID0gNDtcbiAgICAgICAgfSBlbHNlIGlmKGRyYWdnZWRTaGlwLmlkID09PSAnZGVzdHJveWVyJyB8fCBkcmFnZ2VkU2hpcC5pZCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZW5ndGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBzaGlwIG5hbWUgdG8gdGhlIGNsYXNzIG9mIHRoZSBkaXYgb24gdGhlIGJvYXJkIHRvIGFwcGx5IHRoZSBjb3JyZWN0IGNvbG9yXG4gICAgICAgIGlmIChkZWdyZWVzID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKS5jbGFzc0xpc3QuYWRkKGAke2RyYWdnZWRTaGlwLmlkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGVncmVlcyA9PT0gOTApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApLmNsYXNzTGlzdC5hZGQoYCR7ZHJhZ2dlZFNoaXAuaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3B1Q2xpY2tIYW5kbGVyKHNxdWFyZSwgcGxheWVyKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcmFibGUnKVxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgICAgIGNvbnN0IHh5QXJyYXkgPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAoc2hpcHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzIGZpcnN0Lic7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeHlBcnJheSk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnSGl0ISdcbiAgICAgICAgICAgICAgICB8fCBhdHRhY2tSZXN1bHQgPT09ICdQYXRyb2wgQm9hdCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCBhdHRhY2tSZXN1bHQgPT09ICdDYXJyaWVyIHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IGF0dGFja1Jlc3VsdCA9PT0gJ0JhdHRsZXNoaXAgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgYXR0YWNrUmVzdWx0ID09PSAnRGVzdHJveWVyIHN1bmshJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ01pc3MhJykge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBhdHRhY2tSZXN1bHQ7XG4gICAgICAgICAgICBsZXQgZ2FtZU92ZXIgPSBjaGVja1dpbigpO1xuICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIFNldCBhIHNtYWxsIGRlbGF5IG9uIGNwdSBhdHRhY2tcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gY3B1LmNwdUF0dGFjayh0aGVQbGF5ZXIuYm9hcmQpO1xuICAgICAgICAgICAgICAgIGNwdUluZm8udGV4dENvbnRlbnQgPSByZXN1bHRzLmF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtyZXN1bHRzLnh9XCJdW2RhdGEteT1cIiR7cmVzdWx0cy55fVwiXWApXG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdIaXQhJ1xuICAgICAgICAgICAgICAgIHx8IHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnUGF0cm9sIEJvYXQgc3VuayEnXG4gICAgICAgICAgICAgICAgfHwgcmVzdWx0cy5hdHRhY2tSZXN1bHQgPT09ICdDYXJyaWVyIHN1bmshJ1xuICAgICAgICAgICAgICAgIHx8IHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnQmF0dGxlc2hpcCBzdW5rISdcbiAgICAgICAgICAgICAgICB8fCByZXN1bHRzLmF0dGFja1Jlc3VsdCA9PT0gJ0Rlc3Ryb3llciBzdW5rIScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1oaXQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuYXR0YWNrUmVzdWx0ID09PSAnTWlzcyEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnYW1lT3ZlciA9IGNoZWNrV2luKCk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHdpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uaW5nLW1lc3NhZ2UnKTtcbiAgICBmdW5jdGlvbiBjaGVja1dpbigpIHtcbiAgICAgICAgY29uc3Qgd2luTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uaW5nLXRleHQnKTtcbiAgICAgICAgaWYgKHRoZVBsYXllci5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5NZXNzYWdlLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIHdpbnMhJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcHUuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICB3aW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9ICdZb3Ugd2luISdcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERyYWcgc2hpcHNcbiAgICBsZXQgZHJhZ2dlZFNoaXA7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ3N0YXJ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydChlKSB7XG4gICAgICAgIGRyYWdnZWRTaGlwID0gZS50YXJnZXQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IGJ1aWxkR3JpZCwgcmVidWlsZFNoaXBzIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gJy4vZmFjdG9yaWVzL3BsYXllcic7XG5pbXBvcnQgeyB1c2VySW50ZXJmYWNlIH0gZnJvbSAnLi91aSc7XG5cbi8vSW5pdGlhbGl6ZSB0aGUgYm9hcmRzIGFuZCBidWlsZCB0aGUgZ3JpZHNcbmNvbnN0IHVpID0gdXNlckludGVyZmFjZSgpO1xubGV0IHBsYXllciA9IGNyZWF0ZVBsYXllcignUGxheWVyJyk7XG5sZXQgY3B1ID0gY3JlYXRlUGxheWVyKCdDUFUnKTtcbmNwdS5ib2FyZC5yYW5kb21pemVTaGlwcygpO1xuXG51aS5idWlsZEdyaWQocGxheWVyKTtcbnVpLmJ1aWxkR3JpZChjcHUpO1xuXG4vLyBSZS1pbml0aWFsaXplIHRoZSBnYW1lIHN0YXRlXG5jb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQtYnV0dG9uJyk7XG5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItYm9hcmQnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3B1LWJvYXJkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxheWVyID0gY3JlYXRlUGxheWVyKCdQbGF5ZXInKTtcbiAgICBjcHUgPSBjcmVhdGVQbGF5ZXIoJ0NQVScpO1xuICAgIGNwdS5ib2FyZC5yYW5kb21pemVTaGlwcygpO1xuICAgIFxuICAgIHVpLmJ1aWxkR3JpZChwbGF5ZXIpO1xuICAgIHVpLmJ1aWxkR3JpZChjcHUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uaW5nLW1lc3NhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgdWkucmVidWlsZFNoaXBzKCk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9