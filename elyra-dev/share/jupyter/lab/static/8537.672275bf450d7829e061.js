'use strict';
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [8537],
  {
    /***/ 98537: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ diagram: () => /* binding */ diagram
        /* harmony export */
      });
      /* harmony import */ var _chunk_5NNNAHNI_mjs__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(59357);
      /* harmony import */ var _chunk_7B677QYD_mjs__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(93113);
      /* harmony import */ var _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(75905);
      /* harmony import */ var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(24010);

      // src/diagrams/info/infoParser.ts

      var parser = {
        parse: /* @__PURE__ */ (0,
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .__name */.K2)(
          async (input) => {
            const ast = await (0,
            _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_3__ /* .parse */.qg)(
              'info',
              input
            );
            _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .log */.Rm.debug(
              ast
            );
          },
          'parse'
        )
      };

      // src/diagrams/info/infoDb.ts
      var DEFAULT_INFO_DB = {
        version:
          _chunk_5NNNAHNI_mjs__WEBPACK_IMPORTED_MODULE_0__ /* .package_default */
            .n.version
      };
      var getVersion = /* @__PURE__ */ (0,
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .__name */.K2)(
        () => DEFAULT_INFO_DB.version,
        'getVersion'
      );
      var db = {
        getVersion
      };

      // src/diagrams/info/infoRenderer.ts
      var draw = /* @__PURE__ */ (0,
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .__name */.K2)(
        (text, id, version) => {
          _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .log */.Rm.debug(
            'rendering info diagram\n' + text
          );
          const svg = (0,
          _chunk_7B677QYD_mjs__WEBPACK_IMPORTED_MODULE_1__ /* .selectSvgElement */.D)(
            id
          );
          (0,
          _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_2__ /* .configureSvgSize */.a$)(
            svg,
            100,
            400,
            true
          );
          const group = svg.append('g');
          group
            .append('text')
            .attr('x', 100)
            .attr('y', 40)
            .attr('class', 'version')
            .attr('font-size', 32)
            .style('text-anchor', 'middle')
            .text(`v${version}`);
        },
        'draw'
      );
      var renderer = { draw };

      // src/diagrams/info/infoDiagram.ts
      var diagram = {
        parser,
        db,
        renderer
      };

      /***/
    }
  }
]);
//# sourceMappingURL=8537.672275bf450d7829e061.js.map?v=672275bf450d7829e061
