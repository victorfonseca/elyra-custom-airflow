"use strict";
(self["webpackChunk_elyra_metadata_common"] = self["webpackChunk_elyra_metadata_common"] || []).push([["style_index_css"],{

/***/ "../../node_modules/css-loader/dist/cjs.js!./style/index.css":
/*!*******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./style/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2018-2025 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* MetadataWidget CSS */
.elyra-metadata {
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
}

.elyra-metadata a,
.elyra-metadataEditor a {
  color: var(--jp-content-link-color);
}

.elyra-metadataHeader {
  font-weight: bold;
  padding: 2px 6px 2px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.elyra-metadataHeader p {
  font-weight: bold;
}

button.elyra-metadataHeader-button {
  border: none;
  margin: 5px 0;
  padding: 5px;
  background: none;
}

.elyra-metadataHeader-buttons {
  display: flex;
  align-items: center;
}

.elyra-metadataHeader-buttonDivider {
  width: 0.05em;
  height: 1.5em;
  position: relative;
  background-color: var(--jp-border-color1);
}

.elyra-metadataHeader-popper button {
  border: none;
  width: max-content;
  padding: 7px 9px;
  background: none;
  cursor: pointer;
}

.elyra-metadataHeader-popper button:hover {
  background-color: var(--jp-border-color3);
}

.elyra-metadataHeader-popper {
  z-index: 100;
  background-color: var(--jp-cell-editor-active-background);
  border-radius: 10%;
  border-radius: 8px;
  border: 1px solid var(--jp-border-color2);
}

.elyra-metadataHeader-button:hover {
  background-color: var(--jp-layout-color2);
  cursor: pointer;
}

.elyra-metadataHeader [fill] {
  fill: var(--jp-ui-font-color1);
}

.elyra-metadataHeader + div:first-of-type {
  overflow-y: auto;
  height: calc(100vh - 95px);
}

.elyra-metadata-item {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.elyra-metadata-item .elyra-expandableContainer-details-visible {
  background-color: var(--jp-cell-editor-background);
  resize: vertical;
}

.elyra-metadata-item .CodeMirror.cm-s-jupyter {
  background-color: inherit;
  border: none;
  font-family: var(--jp-code-font-family);
  font-size: var(--jp-code-font-size);
  line-height: var(--jp-code-line-height);
}

.elyra-metadata-item .cm-s-jupyter li .cm-string {
  word-break: normal;
}

/* Metadata Editor CSS (a lot of the style for the metadata editor is in
 * the ui-components package under formeditor.css
 */
.elyra-metadataEditor {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--jp-ui-font-color1);
}

/* Code Snippet Filter CSS */
.elyra-searchbar {
  margin: 0px 8px;
}

.elyra-filterTools {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
}

mark.elyra-search-bolding {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color0);
}

.elyra-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 0 10px;
}

.elyra-filter .elyra-filter-btn {
  align-self: flex-end;
  padding: 0px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

.elyra-filter .elyra-filter-btn:hover {
  background-color: var(--jp-layout-color2);
}

.elyra-filter-btn svg {
  display: block;
  width: 30px;
  height: 22px;
}

.elyra-filter-arrow-up.idle,
.elyra-filter-option.idle {
  display: none;
}

.elyra-filter-arrow-up {
  position: absolute;
  margin-top: 16px;
  margin-right: 38px;
  align-self: flex-end;
  background-color: var(--jp-layout-color0);
}

.elyra-filter-option {
  border: var(--jp-border-width) solid var(--jp-border-color1);
  height: 140px;
  width: 100%;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow: auto;
}

.elyra-filter-tags {
  margin: 8px 8px;
}

.elyra-filter-tag {
  margin-left: 3px;
  margin-right: 3px;
}

button.elyra-filter-tag {
  height: 24px;
  padding: 0 12px;
  cursor: pointer;
  color: var(--jp-ui-font-color2);
  font-size: var(--jp-ui-font-size1);
}

button.elyra-filter-tag .elyra-filter-tag-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

button.elyra-filter-tag span,
button.elyra-filter-tag svg {
  pointer-events: none;
}

.elyra-filter-empty {
  font-size: var(--jp-ui-font-size1);
}

.elyra-tools {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
}

.elyra-metadataEditor-saveButton button {
  background: none;
  border: 1px solid var(--jp-border-color1);
  border-radius: 3px;
  padding: 10px;
  font-size: var(--jp-content-font-size2);
  width: fit-content;
  color: var(--jp-content-font-color0);
  cursor: pointer;
}

.elyra-metadataEditor-saveButton button:hover {
  background: var(--jp-border-color3);
}

.elyra-metadataEditor-saveButton.errorForm {
  color: var(--jp-content-font-color3);
}

.elyra-metadataEditor-saveButton.errorForm button {
  border-color: var(--jp-content-font-color3);
  cursor: not-allowed;
}

.elyra-no-metadata-msg {
  padding-left: 8px;
}
`, "",{"version":3,"sources":["webpack://./style/index.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;EAcE;;AAEF,uBAAuB;AACvB;EACE,+BAA+B;EAC/B,mCAAmC;AACrC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,yDAAyD;EACzD,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,mEAAmE;EACnE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kDAAkD;EAClD,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,uCAAuC;EACvC,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE;AACF;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA,4BAA4B;AAC5B;EACE,eAAe;AACjB;;AAEA;EACE,mEAAmE;AACrE;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,yCAAyC;AAC3C;;AAEA;EACE,4DAA4D;EAC5D,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mEAAmE;AACrE;;AAEA;EACE,gBAAgB;EAChB,yCAAyC;EACzC,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,kBAAkB;EAClB,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["/*\n * Copyright 2018-2025 Elyra Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n/* MetadataWidget CSS */\n.elyra-metadata {\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n}\n\n.elyra-metadata a,\n.elyra-metadataEditor a {\n  color: var(--jp-content-link-color);\n}\n\n.elyra-metadataHeader {\n  font-weight: bold;\n  padding: 2px 6px 2px 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.elyra-metadataHeader p {\n  font-weight: bold;\n}\n\nbutton.elyra-metadataHeader-button {\n  border: none;\n  margin: 5px 0;\n  padding: 5px;\n  background: none;\n}\n\n.elyra-metadataHeader-buttons {\n  display: flex;\n  align-items: center;\n}\n\n.elyra-metadataHeader-buttonDivider {\n  width: 0.05em;\n  height: 1.5em;\n  position: relative;\n  background-color: var(--jp-border-color1);\n}\n\n.elyra-metadataHeader-popper button {\n  border: none;\n  width: max-content;\n  padding: 7px 9px;\n  background: none;\n  cursor: pointer;\n}\n\n.elyra-metadataHeader-popper button:hover {\n  background-color: var(--jp-border-color3);\n}\n\n.elyra-metadataHeader-popper {\n  z-index: 100;\n  background-color: var(--jp-cell-editor-active-background);\n  border-radius: 10%;\n  border-radius: 8px;\n  border: 1px solid var(--jp-border-color2);\n}\n\n.elyra-metadataHeader-button:hover {\n  background-color: var(--jp-layout-color2);\n  cursor: pointer;\n}\n\n.elyra-metadataHeader [fill] {\n  fill: var(--jp-ui-font-color1);\n}\n\n.elyra-metadataHeader + div:first-of-type {\n  overflow-y: auto;\n  height: calc(100vh - 95px);\n}\n\n.elyra-metadata-item {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.elyra-metadata-item .elyra-expandableContainer-details-visible {\n  background-color: var(--jp-cell-editor-background);\n  resize: vertical;\n}\n\n.elyra-metadata-item .CodeMirror.cm-s-jupyter {\n  background-color: inherit;\n  border: none;\n  font-family: var(--jp-code-font-family);\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n}\n\n.elyra-metadata-item .cm-s-jupyter li .cm-string {\n  word-break: normal;\n}\n\n/* Metadata Editor CSS (a lot of the style for the metadata editor is in\n * the ui-components package under formeditor.css\n */\n.elyra-metadataEditor {\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-content: flex-start;\n  align-items: flex-start;\n  justify-content: flex-start;\n  color: var(--jp-ui-font-color1);\n}\n\n/* Code Snippet Filter CSS */\n.elyra-searchbar {\n  margin: 0px 8px;\n}\n\n.elyra-filterTools {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);\n}\n\nmark.elyra-search-bolding {\n  background-color: transparent;\n  font-weight: bold;\n  color: var(--jp-ui-font-color0);\n}\n\n.elyra-filter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 10px 0 10px;\n}\n\n.elyra-filter .elyra-filter-btn {\n  align-self: flex-end;\n  padding: 0px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.elyra-filter .elyra-filter-btn:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.elyra-filter-btn svg {\n  display: block;\n  width: 30px;\n  height: 22px;\n}\n\n.elyra-filter-arrow-up.idle,\n.elyra-filter-option.idle {\n  display: none;\n}\n\n.elyra-filter-arrow-up {\n  position: absolute;\n  margin-top: 16px;\n  margin-right: 38px;\n  align-self: flex-end;\n  background-color: var(--jp-layout-color0);\n}\n\n.elyra-filter-option {\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  height: 140px;\n  width: 100%;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  overflow: auto;\n}\n\n.elyra-filter-tags {\n  margin: 8px 8px;\n}\n\n.elyra-filter-tag {\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\nbutton.elyra-filter-tag {\n  height: 24px;\n  padding: 0 12px;\n  cursor: pointer;\n  color: var(--jp-ui-font-color2);\n  font-size: var(--jp-ui-font-size1);\n}\n\nbutton.elyra-filter-tag .elyra-filter-tag-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nbutton.elyra-filter-tag span,\nbutton.elyra-filter-tag svg {\n  pointer-events: none;\n}\n\n.elyra-filter-empty {\n  font-size: var(--jp-ui-font-size1);\n}\n\n.elyra-tools {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);\n}\n\n.elyra-metadataEditor-saveButton button {\n  background: none;\n  border: 1px solid var(--jp-border-color1);\n  border-radius: 3px;\n  padding: 10px;\n  font-size: var(--jp-content-font-size2);\n  width: fit-content;\n  color: var(--jp-content-font-color0);\n  cursor: pointer;\n}\n\n.elyra-metadataEditor-saveButton button:hover {\n  background: var(--jp-border-color3);\n}\n\n.elyra-metadataEditor-saveButton.errorForm {\n  color: var(--jp-content-font-color3);\n}\n\n.elyra-metadataEditor-saveButton.errorForm button {\n  border-color: var(--jp-content-font-color3);\n  cursor: not-allowed;\n}\n\n.elyra-no-metadata-msg {\n  padding-left: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
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

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
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

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!./style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=style_index_css.119e2693f9fc0bf4c9c6.js.map