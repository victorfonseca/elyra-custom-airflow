'use strict';
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1673],
  {
    /***/ 92952: /***/ function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var __extends =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (d, b) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b;
                }) ||
              function (d, b) {
                for (var p in b)
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
              };
            return extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== 'function' && b !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(b) +
                  ' is not a constructor or null'
              );
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          };
        })();
      var __assign =
        (this && this.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                !desc ||
                ('get' in desc
                  ? !m.__esModule
                  : desc.writable || desc.configurable)
              ) {
                desc = {
                  enumerable: true,
                  get: function () {
                    return m[k];
                  }
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __exportStar =
        (this && this.__exportStar) ||
        function (m, exports) {
          for (var p in m)
            if (
              p !== 'default' &&
              !Object.prototype.hasOwnProperty.call(exports, p)
            )
              __createBinding(exports, m, p);
        };
      var __values =
        (this && this.__values) ||
        function (o) {
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(
            s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        };
      var __read =
        (this && this.__read) ||
        function (o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AddCSS = exports.CHTMLFontData = void 0;
      var FontData_js_1 = __webpack_require__(30861);
      var Usage_js_1 = __webpack_require__(60854);
      var lengths_js_1 = __webpack_require__(86810);
      __exportStar(__webpack_require__(30861), exports);
      var CHTMLFontData = (function (_super) {
        __extends(CHTMLFontData, _super);
        function CHTMLFontData() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.charUsage = new Usage_js_1.Usage();
          _this.delimUsage = new Usage_js_1.Usage();
          return _this;
        }
        CHTMLFontData.charOptions = function (font, n) {
          return _super.charOptions.call(this, font, n);
        };
        CHTMLFontData.prototype.adaptiveCSS = function (adapt) {
          this.options.adaptiveCSS = adapt;
        };
        CHTMLFontData.prototype.clearCache = function () {
          if (this.options.adaptiveCSS) {
            this.charUsage.clear();
            this.delimUsage.clear();
          }
        };
        CHTMLFontData.prototype.createVariant = function (name, inherit, link) {
          if (inherit === void 0) {
            inherit = null;
          }
          if (link === void 0) {
            link = null;
          }
          _super.prototype.createVariant.call(this, name, inherit, link);
          var CLASS = this.constructor;
          this.variant[name].classes = CLASS.defaultVariantClasses[name];
          this.variant[name].letter = CLASS.defaultVariantLetters[name];
        };
        CHTMLFontData.prototype.defineChars = function (name, chars) {
          var e_1, _a;
          _super.prototype.defineChars.call(this, name, chars);
          var letter = this.variant[name].letter;
          try {
            for (
              var _b = __values(Object.keys(chars)), _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var n = _c.value;
              var options = CHTMLFontData.charOptions(chars, parseInt(n));
              if (options.f === undefined) {
                options.f = letter;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };
        Object.defineProperty(CHTMLFontData.prototype, 'styles', {
          get: function () {
            var CLASS = this.constructor;
            var styles = __assign({}, CLASS.defaultStyles);
            this.addFontURLs(styles, CLASS.defaultFonts, this.options.fontURL);
            if (this.options.adaptiveCSS) {
              this.updateStyles(styles);
            } else {
              this.allStyles(styles);
            }
            return styles;
          },
          enumerable: false,
          configurable: true
        });
        CHTMLFontData.prototype.updateStyles = function (styles) {
          var e_2, _a, e_3, _b;
          try {
            for (
              var _c = __values(this.delimUsage.update()), _d = _c.next();
              !_d.done;
              _d = _c.next()
            ) {
              var N = _d.value;
              this.addDelimiterStyles(styles, N, this.delimiters[N]);
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
          try {
            for (
              var _e = __values(this.charUsage.update()), _f = _e.next();
              !_f.done;
              _f = _e.next()
            ) {
              var _g = __read(_f.value, 2),
                name_1 = _g[0],
                N = _g[1];
              var variant = this.variant[name_1];
              this.addCharStyles(styles, variant.letter, N, variant.chars[N]);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
          return styles;
        };
        CHTMLFontData.prototype.allStyles = function (styles) {
          var e_4, _a, e_5, _b, e_6, _c;
          try {
            for (
              var _d = __values(Object.keys(this.delimiters)), _e = _d.next();
              !_e.done;
              _e = _d.next()
            ) {
              var n = _e.value;
              var N = parseInt(n);
              this.addDelimiterStyles(styles, N, this.delimiters[N]);
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
          try {
            for (
              var _f = __values(Object.keys(this.variant)), _g = _f.next();
              !_g.done;
              _g = _f.next()
            ) {
              var name_2 = _g.value;
              var variant = this.variant[name_2];
              var vletter = variant.letter;
              try {
                for (
                  var _h =
                      ((e_6 = void 0), __values(Object.keys(variant.chars))),
                    _j = _h.next();
                  !_j.done;
                  _j = _h.next()
                ) {
                  var n = _j.value;
                  var N = parseInt(n);
                  var char = variant.chars[N];
                  if ((char[3] || {}).smp) continue;
                  if (char.length < 4) {
                    char[3] = {};
                  }
                  this.addCharStyles(styles, vletter, N, char);
                }
              } catch (e_6_1) {
                e_6 = { error: e_6_1 };
              } finally {
                try {
                  if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                } finally {
                  if (e_6) throw e_6.error;
                }
              }
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
        };
        CHTMLFontData.prototype.addFontURLs = function (styles, fonts, url) {
          var e_7, _a;
          try {
            for (
              var _b = __values(Object.keys(fonts)), _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var name_3 = _c.value;
              var font = __assign({}, fonts[name_3]);
              font.src = font.src.replace(/%%URL%%/, url);
              styles[name_3] = font;
            }
          } catch (e_7_1) {
            e_7 = { error: e_7_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_7) throw e_7.error;
            }
          }
        };
        CHTMLFontData.prototype.addDelimiterStyles = function (
          styles,
          n,
          data
        ) {
          var c = this.charSelector(n);
          if (data.c && data.c !== n) {
            c = this.charSelector(data.c);
            styles['.mjx-stretched mjx-c' + c + '::before'] = {
              content: this.charContent(data.c)
            };
          }
          if (!data.stretch) return;
          if (data.dir === 1) {
            this.addDelimiterVStyles(styles, c, data);
          } else {
            this.addDelimiterHStyles(styles, c, data);
          }
        };
        CHTMLFontData.prototype.addDelimiterVStyles = function (
          styles,
          c,
          data
        ) {
          var HDW = data.HDW;
          var _a = __read(data.stretch, 4),
            beg = _a[0],
            ext = _a[1],
            end = _a[2],
            mid = _a[3];
          var Hb = this.addDelimiterVPart(styles, c, 'beg', beg, HDW);
          this.addDelimiterVPart(styles, c, 'ext', ext, HDW);
          var He = this.addDelimiterVPart(styles, c, 'end', end, HDW);
          var css = {};
          if (mid) {
            var Hm = this.addDelimiterVPart(styles, c, 'mid', mid, HDW);
            css.height = '50%';
            styles['mjx-stretchy-v' + c + ' > mjx-mid'] = {
              'margin-top': this.em(-Hm / 2),
              'margin-bottom': this.em(-Hm / 2)
            };
          }
          if (Hb) {
            css['border-top-width'] = this.em0(Hb - 0.03);
          }
          if (He) {
            css['border-bottom-width'] = this.em0(He - 0.03);
            styles['mjx-stretchy-v' + c + ' > mjx-end'] = {
              'margin-top': this.em(-He)
            };
          }
          if (Object.keys(css).length) {
            styles['mjx-stretchy-v' + c + ' > mjx-ext'] = css;
          }
        };
        CHTMLFontData.prototype.addDelimiterVPart = function (
          styles,
          c,
          part,
          n,
          HDW
        ) {
          if (!n) return 0;
          var data = this.getDelimiterData(n);
          var dw = (HDW[2] - data[2]) / 2;
          var css = { content: this.charContent(n) };
          if (part !== 'ext') {
            css.padding = this.padding(data, dw);
          } else {
            css.width = this.em0(HDW[2]);
            if (dw) {
              css['padding-left'] = this.em0(dw);
            }
          }
          styles['mjx-stretchy-v' + c + ' mjx-' + part + ' mjx-c::before'] =
            css;
          return data[0] + data[1];
        };
        CHTMLFontData.prototype.addDelimiterHStyles = function (
          styles,
          c,
          data
        ) {
          var _a = __read(data.stretch, 4),
            beg = _a[0],
            ext = _a[1],
            end = _a[2],
            mid = _a[3];
          var HDW = data.HDW;
          this.addDelimiterHPart(styles, c, 'beg', beg, HDW);
          this.addDelimiterHPart(styles, c, 'ext', ext, HDW);
          this.addDelimiterHPart(styles, c, 'end', end, HDW);
          if (mid) {
            this.addDelimiterHPart(styles, c, 'mid', mid, HDW);
            styles['mjx-stretchy-h' + c + ' > mjx-ext'] = { width: '50%' };
          }
        };
        CHTMLFontData.prototype.addDelimiterHPart = function (
          styles,
          c,
          part,
          n,
          HDW
        ) {
          if (!n) return;
          var data = this.getDelimiterData(n);
          var options = data[3];
          var css = {
            content:
              options && options.c ? '"' + options.c + '"' : this.charContent(n)
          };
          css.padding = this.padding(HDW, 0, -HDW[2]);
          styles['mjx-stretchy-h' + c + ' mjx-' + part + ' mjx-c::before'] =
            css;
        };
        CHTMLFontData.prototype.addCharStyles = function (
          styles,
          vletter,
          n,
          data
        ) {
          var options = data[3];
          var letter = options.f !== undefined ? options.f : vletter;
          var selector =
            'mjx-c' + this.charSelector(n) + (letter ? '.TEX-' + letter : '');
          styles[selector + '::before'] = {
            padding: this.padding(data, 0, options.ic || 0),
            content:
              options.c != null ? '"' + options.c + '"' : this.charContent(n)
          };
        };
        CHTMLFontData.prototype.getDelimiterData = function (n) {
          return this.getChar('-smallop', n);
        };
        CHTMLFontData.prototype.em = function (n) {
          return (0, lengths_js_1.em)(n);
        };
        CHTMLFontData.prototype.em0 = function (n) {
          return (0, lengths_js_1.em)(Math.max(0, n));
        };
        CHTMLFontData.prototype.padding = function (_a, dw, ic) {
          var _b = __read(_a, 3),
            h = _b[0],
            d = _b[1],
            w = _b[2];
          if (dw === void 0) {
            dw = 0;
          }
          if (ic === void 0) {
            ic = 0;
          }
          return [h, w + ic, d, dw].map(this.em0).join(' ');
        };
        CHTMLFontData.prototype.charContent = function (n) {
          return (
            '"' +
            (n >= 0x20 && n <= 0x7e && n !== 0x22 && n !== 0x27 && n !== 0x5c
              ? String.fromCharCode(n)
              : '\\' + n.toString(16).toUpperCase()) +
            '"'
          );
        };
        CHTMLFontData.prototype.charSelector = function (n) {
          return '.mjx-c' + n.toString(16).toUpperCase();
        };
        CHTMLFontData.OPTIONS = __assign(
          __assign({}, FontData_js_1.FontData.OPTIONS),
          { fontURL: 'js/output/chtml/fonts/tex-woff-v2' }
        );
        CHTMLFontData.JAX = 'CHTML';
        CHTMLFontData.defaultVariantClasses = {};
        CHTMLFontData.defaultVariantLetters = {};
        CHTMLFontData.defaultStyles = {
          'mjx-c::before': {
            display: 'block',
            width: 0
          }
        };
        CHTMLFontData.defaultFonts = {
          '@font-face /* 0 */': {
            'font-family': 'MJXZERO',
            src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")'
          }
        };
        return CHTMLFontData;
      })(FontData_js_1.FontData);
      exports.CHTMLFontData = CHTMLFontData;
      function AddCSS(font, options) {
        var e_8, _a;
        try {
          for (
            var _b = __values(Object.keys(options)), _c = _b.next();
            !_c.done;
            _c = _b.next()
          ) {
            var c = _c.value;
            var n = parseInt(c);
            Object.assign(
              FontData_js_1.FontData.charOptions(font, n),
              options[n]
            );
          }
        } catch (e_8_1) {
          e_8 = { error: e_8_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
        return font;
      }
      exports.AddCSS = AddCSS;
      //# sourceMappingURL=FontData.js.map

      /***/
    },

    /***/ 60854: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Usage = void 0;
      var Usage = (function () {
        function Usage() {
          this.used = new Set();
          this.needsUpdate = [];
        }
        Usage.prototype.add = function (item) {
          var name = JSON.stringify(item);
          if (!this.used.has(name)) {
            this.needsUpdate.push(item);
          }
          this.used.add(name);
        };
        Usage.prototype.has = function (item) {
          return this.used.has(JSON.stringify(item));
        };
        Usage.prototype.clear = function () {
          this.used.clear();
          this.needsUpdate = [];
        };
        Usage.prototype.update = function () {
          var update = this.needsUpdate;
          this.needsUpdate = [];
          return update;
        };
        return Usage;
      })();
      exports.Usage = Usage;
      //# sourceMappingURL=Usage.js.map

      /***/
    },

    /***/ 1673: /***/ function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var __extends =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (d, b) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b;
                }) ||
              function (d, b) {
                for (var p in b)
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
              };
            return extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== 'function' && b !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(b) +
                  ' is not a constructor or null'
              );
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          };
        })();
      var __assign =
        (this && this.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.TeXFont = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var tex_js_1 = __webpack_require__(6382);
      var bold_italic_js_1 = __webpack_require__(59316);
      var bold_js_1 = __webpack_require__(78451);
      var double_struck_js_1 = __webpack_require__(18018);
      var fraktur_bold_js_1 = __webpack_require__(74141);
      var fraktur_js_1 = __webpack_require__(3785);
      var italic_js_1 = __webpack_require__(74868);
      var largeop_js_1 = __webpack_require__(87434);
      var monospace_js_1 = __webpack_require__(82621);
      var normal_js_1 = __webpack_require__(56979);
      var sans_serif_bold_italic_js_1 = __webpack_require__(83356);
      var sans_serif_bold_js_1 = __webpack_require__(11211);
      var sans_serif_italic_js_1 = __webpack_require__(76316);
      var sans_serif_js_1 = __webpack_require__(16651);
      var script_bold_js_1 = __webpack_require__(56755);
      var script_js_1 = __webpack_require__(45491);
      var smallop_js_1 = __webpack_require__(7598);
      var tex_calligraphic_bold_js_1 = __webpack_require__(83085);
      var tex_calligraphic_js_1 = __webpack_require__(74681);
      var tex_mathit_js_1 = __webpack_require__(91611);
      var tex_oldstyle_bold_js_1 = __webpack_require__(56848);
      var tex_oldstyle_js_1 = __webpack_require__(74878);
      var tex_size3_js_1 = __webpack_require__(99652);
      var tex_size4_js_1 = __webpack_require__(39729);
      var tex_variant_js_1 = __webpack_require__(82599);
      var delimiters_js_1 = __webpack_require__(6987);
      var TeXFont = (function (_super) {
        __extends(TeXFont, _super);
        function TeXFont() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        TeXFont.defaultCssFamilyPrefix = 'MJXZERO';
        TeXFont.defaultVariantClasses = {
          normal: 'mjx-n',
          bold: 'mjx-b',
          italic: 'mjx-i',
          'bold-italic': 'mjx-b mjx-i',
          'double-struck': 'mjx-ds mjx-b',
          fraktur: 'mjx-fr',
          'bold-fraktur': 'mjx-fr mjx-b',
          script: 'mjx-sc mjx-i',
          'bold-script': 'mjx-sc mjx-b mjx-i',
          'sans-serif': 'mjx-ss',
          'bold-sans-serif': 'mjx-ss mjx-b',
          'sans-serif-italic': 'mjx-ss mjx-i',
          'sans-serif-bold-italic': 'mjx-ss mjx-b mjx-i',
          monospace: 'mjx-ty',
          '-smallop': 'mjx-sop',
          '-largeop': 'mjx-lop',
          '-size3': 'mjx-s3',
          '-size4': 'mjx-s4',
          '-tex-calligraphic': 'mjx-cal mjx-i',
          '-tex-bold-calligraphic': 'mjx-cal mjx-b',
          '-tex-mathit': 'mjx-mit mjx-i',
          '-tex-oldstyle': 'mjx-os',
          '-tex-bold-oldstyle': 'mjx-os mjx-b',
          '-tex-variant': 'mjx-var'
        };
        TeXFont.defaultVariantLetters = {
          normal: '',
          bold: 'B',
          italic: 'MI',
          'bold-italic': 'BI',
          'double-struck': 'A',
          fraktur: 'FR',
          'bold-fraktur': 'FRB',
          script: 'SC',
          'bold-script': 'SCB',
          'sans-serif': 'SS',
          'bold-sans-serif': 'SSB',
          'sans-serif-italic': 'SSI',
          'sans-serif-bold-italic': 'SSBI',
          monospace: 'T',
          '-smallop': 'S1',
          '-largeop': 'S2',
          '-size3': 'S3',
          '-size4': 'S4',
          '-tex-calligraphic': 'C',
          '-tex-bold-calligraphic': 'CB',
          '-tex-mathit': 'MI',
          '-tex-oldstyle': 'C',
          '-tex-bold-oldstyle': 'CB',
          '-tex-variant': 'A'
        };
        TeXFont.defaultDelimiters = delimiters_js_1.delimiters;
        TeXFont.defaultChars = {
          normal: normal_js_1.normal,
          bold: bold_js_1.bold,
          italic: italic_js_1.italic,
          'bold-italic': bold_italic_js_1.boldItalic,
          'double-struck': double_struck_js_1.doubleStruck,
          fraktur: fraktur_js_1.fraktur,
          'bold-fraktur': fraktur_bold_js_1.frakturBold,
          script: script_js_1.script,
          'bold-script': script_bold_js_1.scriptBold,
          'sans-serif': sans_serif_js_1.sansSerif,
          'bold-sans-serif': sans_serif_bold_js_1.sansSerifBold,
          'sans-serif-italic': sans_serif_italic_js_1.sansSerifItalic,
          'sans-serif-bold-italic':
            sans_serif_bold_italic_js_1.sansSerifBoldItalic,
          monospace: monospace_js_1.monospace,
          '-smallop': smallop_js_1.smallop,
          '-largeop': largeop_js_1.largeop,
          '-size3': tex_size3_js_1.texSize3,
          '-size4': tex_size4_js_1.texSize4,
          '-tex-calligraphic': tex_calligraphic_js_1.texCalligraphic,
          '-tex-bold-calligraphic':
            tex_calligraphic_bold_js_1.texCalligraphicBold,
          '-tex-mathit': tex_mathit_js_1.texMathit,
          '-tex-oldstyle': tex_oldstyle_js_1.texOldstyle,
          '-tex-bold-oldstyle': tex_oldstyle_bold_js_1.texOldstyleBold,
          '-tex-variant': tex_variant_js_1.texVariant
        };
        TeXFont.defaultStyles = __assign(
          __assign({}, FontData_js_1.CHTMLFontData.defaultStyles),
          {
            '.MJX-TEX': {
              'font-family': 'MJXZERO, MJXTEX'
            },
            '.TEX-B': {
              'font-family': 'MJXZERO, MJXTEX-B'
            },
            '.TEX-I': {
              'font-family': 'MJXZERO, MJXTEX-I'
            },
            '.TEX-MI': {
              'font-family': 'MJXZERO, MJXTEX-MI'
            },
            '.TEX-BI': {
              'font-family': 'MJXZERO, MJXTEX-BI'
            },
            '.TEX-S1': {
              'font-family': 'MJXZERO, MJXTEX-S1'
            },
            '.TEX-S2': {
              'font-family': 'MJXZERO, MJXTEX-S2'
            },
            '.TEX-S3': {
              'font-family': 'MJXZERO, MJXTEX-S3'
            },
            '.TEX-S4': {
              'font-family': 'MJXZERO, MJXTEX-S4'
            },
            '.TEX-A': {
              'font-family': 'MJXZERO, MJXTEX-A'
            },
            '.TEX-C': {
              'font-family': 'MJXZERO, MJXTEX-C'
            },
            '.TEX-CB': {
              'font-family': 'MJXZERO, MJXTEX-CB'
            },
            '.TEX-FR': {
              'font-family': 'MJXZERO, MJXTEX-FR'
            },
            '.TEX-FRB': {
              'font-family': 'MJXZERO, MJXTEX-FRB'
            },
            '.TEX-SS': {
              'font-family': 'MJXZERO, MJXTEX-SS'
            },
            '.TEX-SSB': {
              'font-family': 'MJXZERO, MJXTEX-SSB'
            },
            '.TEX-SSI': {
              'font-family': 'MJXZERO, MJXTEX-SSI'
            },
            '.TEX-SC': {
              'font-family': 'MJXZERO, MJXTEX-SC'
            },
            '.TEX-T': {
              'font-family': 'MJXZERO, MJXTEX-T'
            },
            '.TEX-V': {
              'font-family': 'MJXZERO, MJXTEX-V'
            },
            '.TEX-VB': {
              'font-family': 'MJXZERO, MJXTEX-VB'
            },
            'mjx-stretchy-v mjx-c, mjx-stretchy-h mjx-c': {
              'font-family':
                'MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A ! important'
            }
          }
        );
        TeXFont.defaultFonts = __assign(
          __assign({}, FontData_js_1.CHTMLFontData.defaultFonts),
          {
            '@font-face /* 1 */': {
              'font-family': 'MJXTEX',
              src: 'url("%%URL%%/MathJax_Main-Regular.woff") format("woff")'
            },
            '@font-face /* 2 */': {
              'font-family': 'MJXTEX-B',
              src: 'url("%%URL%%/MathJax_Main-Bold.woff") format("woff")'
            },
            '@font-face /* 3 */': {
              'font-family': 'MJXTEX-I',
              src: 'url("%%URL%%/MathJax_Math-Italic.woff") format("woff")'
            },
            '@font-face /* 4 */': {
              'font-family': 'MJXTEX-MI',
              src: 'url("%%URL%%/MathJax_Main-Italic.woff") format("woff")'
            },
            '@font-face /* 5 */': {
              'font-family': 'MJXTEX-BI',
              src: 'url("%%URL%%/MathJax_Math-BoldItalic.woff") format("woff")'
            },
            '@font-face /* 6 */': {
              'font-family': 'MJXTEX-S1',
              src: 'url("%%URL%%/MathJax_Size1-Regular.woff") format("woff")'
            },
            '@font-face /* 7 */': {
              'font-family': 'MJXTEX-S2',
              src: 'url("%%URL%%/MathJax_Size2-Regular.woff") format("woff")'
            },
            '@font-face /* 8 */': {
              'font-family': 'MJXTEX-S3',
              src: 'url("%%URL%%/MathJax_Size3-Regular.woff") format("woff")'
            },
            '@font-face /* 9 */': {
              'font-family': 'MJXTEX-S4',
              src: 'url("%%URL%%/MathJax_Size4-Regular.woff") format("woff")'
            },
            '@font-face /* 10 */': {
              'font-family': 'MJXTEX-A',
              src: 'url("%%URL%%/MathJax_AMS-Regular.woff") format("woff")'
            },
            '@font-face /* 11 */': {
              'font-family': 'MJXTEX-C',
              src: 'url("%%URL%%/MathJax_Calligraphic-Regular.woff") format("woff")'
            },
            '@font-face /* 12 */': {
              'font-family': 'MJXTEX-CB',
              src: 'url("%%URL%%/MathJax_Calligraphic-Bold.woff") format("woff")'
            },
            '@font-face /* 13 */': {
              'font-family': 'MJXTEX-FR',
              src: 'url("%%URL%%/MathJax_Fraktur-Regular.woff") format("woff")'
            },
            '@font-face /* 14 */': {
              'font-family': 'MJXTEX-FRB',
              src: 'url("%%URL%%/MathJax_Fraktur-Bold.woff") format("woff")'
            },
            '@font-face /* 15 */': {
              'font-family': 'MJXTEX-SS',
              src: 'url("%%URL%%/MathJax_SansSerif-Regular.woff") format("woff")'
            },
            '@font-face /* 16 */': {
              'font-family': 'MJXTEX-SSB',
              src: 'url("%%URL%%/MathJax_SansSerif-Bold.woff") format("woff")'
            },
            '@font-face /* 17 */': {
              'font-family': 'MJXTEX-SSI',
              src: 'url("%%URL%%/MathJax_SansSerif-Italic.woff") format("woff")'
            },
            '@font-face /* 18 */': {
              'font-family': 'MJXTEX-SC',
              src: 'url("%%URL%%/MathJax_Script-Regular.woff") format("woff")'
            },
            '@font-face /* 19 */': {
              'font-family': 'MJXTEX-T',
              src: 'url("%%URL%%/MathJax_Typewriter-Regular.woff") format("woff")'
            },
            '@font-face /* 20 */': {
              'font-family': 'MJXTEX-V',
              src: 'url("%%URL%%/MathJax_Vector-Regular.woff") format("woff")'
            },
            '@font-face /* 21 */': {
              'font-family': 'MJXTEX-VB',
              src: 'url("%%URL%%/MathJax_Vector-Bold.woff") format("woff")'
            }
          }
        );
        return TeXFont;
      })((0, tex_js_1.CommonTeXFontMixin)(FontData_js_1.CHTMLFontData));
      exports.TeXFont = TeXFont;
      //# sourceMappingURL=tex.js.map

      /***/
    },

    /***/ 59316: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.boldItalic = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var bold_italic_js_1 = __webpack_require__(51091);
      exports.boldItalic = (0, FontData_js_1.AddCSS)(
        bold_italic_js_1.boldItalic,
        {
          0x131: { f: 'B' },
          0x237: { f: 'B' },
          0x2044: { c: '/' },
          0x2206: { c: '\\394' },
          0x29f8: { c: '/' }
        }
      );
      //# sourceMappingURL=bold-italic.js.map

      /***/
    },

    /***/ 78451: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.bold = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var bold_js_1 = __webpack_require__(95746);
      exports.bold = (0, FontData_js_1.AddCSS)(bold_js_1.bold, {
        0xb7: { c: '\\22C5' },
        0x131: { f: '' },
        0x237: { f: '' },
        0x2b9: { c: '\\2032' },
        0x2002: { c: '' },
        0x2003: { c: '' },
        0x2004: { c: '' },
        0x2005: { c: '' },
        0x2006: { c: '' },
        0x2009: { c: '' },
        0x200a: { c: '' },
        0x2015: { c: '\\2014' },
        0x2016: { c: '\\2225' },
        0x2017: { c: '_' },
        0x2022: { c: '\\2219' },
        0x2033: { c: '\\2032\\2032' },
        0x2034: { c: '\\2032\\2032\\2032' },
        0x203e: { c: '\\2C9' },
        0x2044: { c: '/' },
        0x2057: { c: '\\2032\\2032\\2032\\2032' },
        0x20d7: { c: '\\2192', f: 'VB' },
        0x219a: { c: '\\2190\\338' },
        0x219b: { c: '\\2192\\338' },
        0x21ae: { c: '\\2194\\338' },
        0x21cd: { c: '\\21D0\\338' },
        0x21ce: { c: '\\21D4\\338' },
        0x21cf: { c: '\\21D2\\338' },
        0x2204: { c: '\\2203\\338' },
        0x2206: { c: '\\394' },
        0x220c: { c: '\\220B\\338' },
        0x2224: { c: '\\2223\\338' },
        0x2226: { c: '\\2225\\338' },
        0x2241: { c: '\\223C\\338' },
        0x2244: { c: '\\2243\\338' },
        0x2247: { c: '\\2245\\338' },
        0x2249: { c: '\\2248\\338' },
        0x2262: { c: '\\2261\\338' },
        0x226d: { c: '\\224D\\338' },
        0x226e: { c: '<\\338' },
        0x226f: { c: '>\\338' },
        0x2270: { c: '\\2264\\338' },
        0x2271: { c: '\\2265\\338' },
        0x2280: { c: '\\227A\\338' },
        0x2281: { c: '\\227B\\338' },
        0x2284: { c: '\\2282\\338' },
        0x2285: { c: '\\2283\\338' },
        0x2288: { c: '\\2286\\338' },
        0x2289: { c: '\\2287\\338' },
        0x22ac: { c: '\\22A2\\338' },
        0x22ad: { c: '\\22A8\\338' },
        0x22e2: { c: '\\2291\\338' },
        0x22e3: { c: '\\2292\\338' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x25b5: { c: '\\25B3' },
        0x25bf: { c: '\\25BD' },
        0x2758: { c: '\\2223' },
        0x29f8: { c: '/', f: 'BI' },
        0x2a2f: { c: '\\D7' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' }
      });
      //# sourceMappingURL=bold.js.map

      /***/
    },

    /***/ 18018: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.doubleStruck = void 0;
      var double_struck_js_1 = __webpack_require__(32249);
      Object.defineProperty(exports, 'doubleStruck', {
        enumerable: true,
        get: function () {
          return double_struck_js_1.doubleStruck;
        }
      });
      //# sourceMappingURL=double-struck.js.map

      /***/
    },

    /***/ 74141: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.frakturBold = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var fraktur_bold_js_1 = __webpack_require__(45600);
      exports.frakturBold = (0, FontData_js_1.AddCSS)(
        fraktur_bold_js_1.frakturBold,
        {
          0x2044: { c: '/' }
        }
      );
      //# sourceMappingURL=fraktur-bold.js.map

      /***/
    },

    /***/ 3785: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.fraktur = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var fraktur_js_1 = __webpack_require__(59534);
      exports.fraktur = (0, FontData_js_1.AddCSS)(fraktur_js_1.fraktur, {
        0x2044: { c: '/' }
      });
      //# sourceMappingURL=fraktur.js.map

      /***/
    },

    /***/ 74868: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.italic = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var italic_js_1 = __webpack_require__(14141);
      exports.italic = (0, FontData_js_1.AddCSS)(italic_js_1.italic, {
        0x2f: { f: 'I' },
        0x3dd: { c: '\\E008', f: 'A' },
        0x2015: { c: '\\2014' },
        0x2017: { c: '_' },
        0x2044: { c: '/', f: 'I' },
        0x2206: { c: '\\394', f: 'I' },
        0x29f8: { c: '/', f: 'I' }
      });
      //# sourceMappingURL=italic.js.map

      /***/
    },

    /***/ 87434: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.largeop = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var largeop_js_1 = __webpack_require__(63969);
      exports.largeop = (0, FontData_js_1.AddCSS)(largeop_js_1.largeop, {
        0x2016: { f: 'S1' },
        0x2044: { c: '/' },
        0x2191: { f: 'S1' },
        0x2193: { f: 'S1' },
        0x21d1: { f: 'S1' },
        0x21d3: { f: 'S1' },
        0x2223: { f: 'S1' },
        0x2225: { f: 'S1' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x23d0: { f: 'S1' },
        0x2758: { c: '\\2223', f: 'S1' },
        0x2a0c: { c: '\\222C\\222C' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' }
      });
      //# sourceMappingURL=largeop.js.map

      /***/
    },

    /***/ 82621: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.monospace = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var monospace_js_1 = __webpack_require__(58626);
      exports.monospace = (0, FontData_js_1.AddCSS)(monospace_js_1.monospace, {
        0x2b9: { c: '\\2032' },
        0x391: { c: 'A' },
        0x392: { c: 'B' },
        0x395: { c: 'E' },
        0x396: { c: 'Z' },
        0x397: { c: 'H' },
        0x399: { c: 'I' },
        0x39a: { c: 'K' },
        0x39c: { c: 'M' },
        0x39d: { c: 'N' },
        0x39f: { c: 'O' },
        0x3a1: { c: 'P' },
        0x3a4: { c: 'T' },
        0x3a7: { c: 'X' },
        0x2017: { c: '_' },
        0x2033: { c: '\\2032\\2032' },
        0x2034: { c: '\\2032\\2032\\2032' },
        0x2044: { c: '/' },
        0x2057: { c: '\\2032\\2032\\2032\\2032' },
        0x2206: { c: '\\394' }
      });
      //# sourceMappingURL=monospace.js.map

      /***/
    },

    /***/ 56979: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.normal = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var normal_js_1 = __webpack_require__(25190);
      exports.normal = (0, FontData_js_1.AddCSS)(normal_js_1.normal, {
        0xa3: { f: 'MI' },
        0xa5: { f: 'A' },
        0xae: { f: 'A' },
        0xb7: { c: '\\22C5' },
        0xf0: { f: 'A' },
        0x2b9: { c: '\\2032' },
        0x391: { c: 'A' },
        0x392: { c: 'B' },
        0x395: { c: 'E' },
        0x396: { c: 'Z' },
        0x397: { c: 'H' },
        0x399: { c: 'I' },
        0x39a: { c: 'K' },
        0x39c: { c: 'M' },
        0x39d: { c: 'N' },
        0x39f: { c: 'O' },
        0x3a1: { c: 'P' },
        0x3a4: { c: 'T' },
        0x3a7: { c: 'X' },
        0x2000: { c: '' },
        0x2001: { c: '' },
        0x2002: { c: '' },
        0x2003: { c: '' },
        0x2004: { c: '' },
        0x2005: { c: '' },
        0x2006: { c: '' },
        0x2009: { c: '' },
        0x200a: { c: '' },
        0x200b: { c: '' },
        0x200c: { c: '' },
        0x2015: { c: '\\2014' },
        0x2016: { c: '\\2225' },
        0x2017: { c: '_' },
        0x2022: { c: '\\2219' },
        0x2033: { c: '\\2032\\2032' },
        0x2034: { c: '\\2032\\2032\\2032' },
        0x2035: { f: 'A' },
        0x2036: { c: '\\2035\\2035', f: 'A' },
        0x2037: { c: '\\2035\\2035\\2035', f: 'A' },
        0x203e: { c: '\\2C9' },
        0x2044: { c: '/' },
        0x2057: { c: '\\2032\\2032\\2032\\2032' },
        0x2060: { c: '' },
        0x2061: { c: '' },
        0x2062: { c: '' },
        0x2063: { c: '' },
        0x2064: { c: '' },
        0x20d7: { c: '\\2192', f: 'V' },
        0x2102: { c: 'C', f: 'A' },
        0x210b: { c: 'H', f: 'SC' },
        0x210c: { c: 'H', f: 'FR' },
        0x210d: { c: 'H', f: 'A' },
        0x210e: { c: 'h', f: 'I' },
        0x210f: { f: 'A' },
        0x2110: { c: 'I', f: 'SC' },
        0x2111: { c: 'I', f: 'FR' },
        0x2112: { c: 'L', f: 'SC' },
        0x2115: { c: 'N', f: 'A' },
        0x2119: { c: 'P', f: 'A' },
        0x211a: { c: 'Q', f: 'A' },
        0x211b: { c: 'R', f: 'SC' },
        0x211c: { c: 'R', f: 'FR' },
        0x211d: { c: 'R', f: 'A' },
        0x2124: { c: 'Z', f: 'A' },
        0x2126: { c: '\\3A9' },
        0x2127: { f: 'A' },
        0x2128: { c: 'Z', f: 'FR' },
        0x212c: { c: 'B', f: 'SC' },
        0x212d: { c: 'C', f: 'FR' },
        0x2130: { c: 'E', f: 'SC' },
        0x2131: { c: 'F', f: 'SC' },
        0x2132: { f: 'A' },
        0x2133: { c: 'M', f: 'SC' },
        0x2136: { f: 'A' },
        0x2137: { f: 'A' },
        0x2138: { f: 'A' },
        0x2141: { f: 'A' },
        0x219a: { f: 'A' },
        0x219b: { f: 'A' },
        0x219e: { f: 'A' },
        0x21a0: { f: 'A' },
        0x21a2: { f: 'A' },
        0x21a3: { f: 'A' },
        0x21ab: { f: 'A' },
        0x21ac: { f: 'A' },
        0x21ad: { f: 'A' },
        0x21ae: { f: 'A' },
        0x21b0: { f: 'A' },
        0x21b1: { f: 'A' },
        0x21b6: { f: 'A' },
        0x21b7: { f: 'A' },
        0x21ba: { f: 'A' },
        0x21bb: { f: 'A' },
        0x21be: { f: 'A' },
        0x21bf: { f: 'A' },
        0x21c2: { f: 'A' },
        0x21c3: { f: 'A' },
        0x21c4: { f: 'A' },
        0x21c6: { f: 'A' },
        0x21c7: { f: 'A' },
        0x21c8: { f: 'A' },
        0x21c9: { f: 'A' },
        0x21ca: { f: 'A' },
        0x21cb: { f: 'A' },
        0x21cd: { f: 'A' },
        0x21ce: { f: 'A' },
        0x21cf: { f: 'A' },
        0x21da: { f: 'A' },
        0x21db: { f: 'A' },
        0x21dd: { f: 'A' },
        0x21e0: { f: 'A' },
        0x21e2: { f: 'A' },
        0x2201: { f: 'A' },
        0x2204: { c: '\\2203\\338' },
        0x2206: { c: '\\394' },
        0x220c: { c: '\\220B\\338' },
        0x220d: { f: 'A' },
        0x220f: { f: 'S1' },
        0x2210: { f: 'S1' },
        0x2211: { f: 'S1' },
        0x2214: { f: 'A' },
        0x2221: { f: 'A' },
        0x2222: { f: 'A' },
        0x2224: { f: 'A' },
        0x2226: { f: 'A' },
        0x222c: { f: 'S1' },
        0x222d: { f: 'S1' },
        0x222e: { f: 'S1' },
        0x2234: { f: 'A' },
        0x2235: { f: 'A' },
        0x223d: { f: 'A' },
        0x2241: { f: 'A' },
        0x2242: { f: 'A' },
        0x2244: { c: '\\2243\\338' },
        0x2247: { c: '\\2246', f: 'A' },
        0x2249: { c: '\\2248\\338' },
        0x224a: { f: 'A' },
        0x224e: { f: 'A' },
        0x224f: { f: 'A' },
        0x2251: { f: 'A' },
        0x2252: { f: 'A' },
        0x2253: { f: 'A' },
        0x2256: { f: 'A' },
        0x2257: { f: 'A' },
        0x225c: { f: 'A' },
        0x2262: { c: '\\2261\\338' },
        0x2266: { f: 'A' },
        0x2267: { f: 'A' },
        0x2268: { f: 'A' },
        0x2269: { f: 'A' },
        0x226c: { f: 'A' },
        0x226d: { c: '\\224D\\338' },
        0x226e: { f: 'A' },
        0x226f: { f: 'A' },
        0x2270: { f: 'A' },
        0x2271: { f: 'A' },
        0x2272: { f: 'A' },
        0x2273: { f: 'A' },
        0x2274: { c: '\\2272\\338' },
        0x2275: { c: '\\2273\\338' },
        0x2276: { f: 'A' },
        0x2277: { f: 'A' },
        0x2278: { c: '\\2276\\338' },
        0x2279: { c: '\\2277\\338' },
        0x227c: { f: 'A' },
        0x227d: { f: 'A' },
        0x227e: { f: 'A' },
        0x227f: { f: 'A' },
        0x2280: { f: 'A' },
        0x2281: { f: 'A' },
        0x2284: { c: '\\2282\\338' },
        0x2285: { c: '\\2283\\338' },
        0x2288: { f: 'A' },
        0x2289: { f: 'A' },
        0x228a: { f: 'A' },
        0x228b: { f: 'A' },
        0x228f: { f: 'A' },
        0x2290: { f: 'A' },
        0x229a: { f: 'A' },
        0x229b: { f: 'A' },
        0x229d: { f: 'A' },
        0x229e: { f: 'A' },
        0x229f: { f: 'A' },
        0x22a0: { f: 'A' },
        0x22a1: { f: 'A' },
        0x22a9: { f: 'A' },
        0x22aa: { f: 'A' },
        0x22ac: { f: 'A' },
        0x22ad: { f: 'A' },
        0x22ae: { f: 'A' },
        0x22af: { f: 'A' },
        0x22b2: { f: 'A' },
        0x22b3: { f: 'A' },
        0x22b4: { f: 'A' },
        0x22b5: { f: 'A' },
        0x22b8: { f: 'A' },
        0x22ba: { f: 'A' },
        0x22bb: { f: 'A' },
        0x22bc: { f: 'A' },
        0x22c0: { f: 'S1' },
        0x22c1: { f: 'S1' },
        0x22c2: { f: 'S1' },
        0x22c3: { f: 'S1' },
        0x22c7: { f: 'A' },
        0x22c9: { f: 'A' },
        0x22ca: { f: 'A' },
        0x22cb: { f: 'A' },
        0x22cc: { f: 'A' },
        0x22cd: { f: 'A' },
        0x22ce: { f: 'A' },
        0x22cf: { f: 'A' },
        0x22d0: { f: 'A' },
        0x22d1: { f: 'A' },
        0x22d2: { f: 'A' },
        0x22d3: { f: 'A' },
        0x22d4: { f: 'A' },
        0x22d6: { f: 'A' },
        0x22d7: { f: 'A' },
        0x22d8: { f: 'A' },
        0x22d9: { f: 'A' },
        0x22da: { f: 'A' },
        0x22db: { f: 'A' },
        0x22de: { f: 'A' },
        0x22df: { f: 'A' },
        0x22e0: { f: 'A' },
        0x22e1: { f: 'A' },
        0x22e2: { c: '\\2291\\338' },
        0x22e3: { c: '\\2292\\338' },
        0x22e6: { f: 'A' },
        0x22e7: { f: 'A' },
        0x22e8: { f: 'A' },
        0x22e9: { f: 'A' },
        0x22ea: { f: 'A' },
        0x22eb: { f: 'A' },
        0x22ec: { f: 'A' },
        0x22ed: { f: 'A' },
        0x2305: { c: '\\22BC', f: 'A' },
        0x2306: { c: '\\2A5E', f: 'A' },
        0x231c: { c: '\\250C', f: 'A' },
        0x231d: { c: '\\2510', f: 'A' },
        0x231e: { c: '\\2514', f: 'A' },
        0x231f: { c: '\\2518', f: 'A' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x23d0: { f: 'S1' },
        0x24c8: { f: 'A' },
        0x250c: { f: 'A' },
        0x2510: { f: 'A' },
        0x2514: { f: 'A' },
        0x2518: { f: 'A' },
        0x2571: { f: 'A' },
        0x2572: { f: 'A' },
        0x25a0: { f: 'A' },
        0x25a1: { f: 'A' },
        0x25aa: { c: '\\25A0', f: 'A' },
        0x25b2: { f: 'A' },
        0x25b4: { c: '\\25B2', f: 'A' },
        0x25b5: { c: '\\25B3' },
        0x25b6: { f: 'A' },
        0x25b8: { c: '\\25B6', f: 'A' },
        0x25bc: { f: 'A' },
        0x25be: { c: '\\25BC', f: 'A' },
        0x25bf: { c: '\\25BD' },
        0x25c0: { f: 'A' },
        0x25c2: { c: '\\25C0', f: 'A' },
        0x25ca: { f: 'A' },
        0x25fb: { c: '\\25A1', f: 'A' },
        0x25fc: { c: '\\25A0', f: 'A' },
        0x2605: { f: 'A' },
        0x2713: { f: 'A' },
        0x2720: { f: 'A' },
        0x2758: { c: '\\2223' },
        0x29eb: { f: 'A' },
        0x29f8: { c: '/', f: 'I' },
        0x2a00: { f: 'S1' },
        0x2a01: { f: 'S1' },
        0x2a02: { f: 'S1' },
        0x2a04: { f: 'S1' },
        0x2a06: { f: 'S1' },
        0x2a0c: { c: '\\222C\\222C', f: 'S1' },
        0x2a2f: { c: '\\D7' },
        0x2a5e: { f: 'A' },
        0x2a7d: { f: 'A' },
        0x2a7e: { f: 'A' },
        0x2a85: { f: 'A' },
        0x2a86: { f: 'A' },
        0x2a87: { f: 'A' },
        0x2a88: { f: 'A' },
        0x2a89: { f: 'A' },
        0x2a8a: { f: 'A' },
        0x2a8b: { f: 'A' },
        0x2a8c: { f: 'A' },
        0x2a95: { f: 'A' },
        0x2a96: { f: 'A' },
        0x2ab5: { f: 'A' },
        0x2ab6: { f: 'A' },
        0x2ab7: { f: 'A' },
        0x2ab8: { f: 'A' },
        0x2ab9: { f: 'A' },
        0x2aba: { f: 'A' },
        0x2ac5: { f: 'A' },
        0x2ac6: { f: 'A' },
        0x2acb: { f: 'A' },
        0x2acc: { f: 'A' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' },
        0xe006: { f: 'A' },
        0xe007: { f: 'A' },
        0xe008: { f: 'A' },
        0xe009: { f: 'A' },
        0xe00c: { f: 'A' },
        0xe00d: { f: 'A' },
        0xe00e: { f: 'A' },
        0xe00f: { f: 'A' },
        0xe010: { f: 'A' },
        0xe011: { f: 'A' },
        0xe016: { f: 'A' },
        0xe017: { f: 'A' },
        0xe018: { f: 'A' },
        0xe019: { f: 'A' },
        0xe01a: { f: 'A' },
        0xe01b: { f: 'A' },
        0x1d400: { c: 'A', f: 'B' },
        0x1d401: { c: 'B', f: 'B' },
        0x1d402: { c: 'C', f: 'B' },
        0x1d403: { c: 'D', f: 'B' },
        0x1d404: { c: 'E', f: 'B' },
        0x1d405: { c: 'F', f: 'B' },
        0x1d406: { c: 'G', f: 'B' },
        0x1d407: { c: 'H', f: 'B' },
        0x1d408: { c: 'I', f: 'B' },
        0x1d409: { c: 'J', f: 'B' },
        0x1d40a: { c: 'K', f: 'B' },
        0x1d40b: { c: 'L', f: 'B' },
        0x1d40c: { c: 'M', f: 'B' },
        0x1d40d: { c: 'N', f: 'B' },
        0x1d40e: { c: 'O', f: 'B' },
        0x1d40f: { c: 'P', f: 'B' },
        0x1d410: { c: 'Q', f: 'B' },
        0x1d411: { c: 'R', f: 'B' },
        0x1d412: { c: 'S', f: 'B' },
        0x1d413: { c: 'T', f: 'B' },
        0x1d414: { c: 'U', f: 'B' },
        0x1d415: { c: 'V', f: 'B' },
        0x1d416: { c: 'W', f: 'B' },
        0x1d417: { c: 'X', f: 'B' },
        0x1d418: { c: 'Y', f: 'B' },
        0x1d419: { c: 'Z', f: 'B' },
        0x1d41a: { c: 'a', f: 'B' },
        0x1d41b: { c: 'b', f: 'B' },
        0x1d41c: { c: 'c', f: 'B' },
        0x1d41d: { c: 'd', f: 'B' },
        0x1d41e: { c: 'e', f: 'B' },
        0x1d41f: { c: 'f', f: 'B' },
        0x1d420: { c: 'g', f: 'B' },
        0x1d421: { c: 'h', f: 'B' },
        0x1d422: { c: 'i', f: 'B' },
        0x1d423: { c: 'j', f: 'B' },
        0x1d424: { c: 'k', f: 'B' },
        0x1d425: { c: 'l', f: 'B' },
        0x1d426: { c: 'm', f: 'B' },
        0x1d427: { c: 'n', f: 'B' },
        0x1d428: { c: 'o', f: 'B' },
        0x1d429: { c: 'p', f: 'B' },
        0x1d42a: { c: 'q', f: 'B' },
        0x1d42b: { c: 'r', f: 'B' },
        0x1d42c: { c: 's', f: 'B' },
        0x1d42d: { c: 't', f: 'B' },
        0x1d42e: { c: 'u', f: 'B' },
        0x1d42f: { c: 'v', f: 'B' },
        0x1d430: { c: 'w', f: 'B' },
        0x1d431: { c: 'x', f: 'B' },
        0x1d432: { c: 'y', f: 'B' },
        0x1d433: { c: 'z', f: 'B' },
        0x1d434: { c: 'A', f: 'I' },
        0x1d435: { c: 'B', f: 'I' },
        0x1d436: { c: 'C', f: 'I' },
        0x1d437: { c: 'D', f: 'I' },
        0x1d438: { c: 'E', f: 'I' },
        0x1d439: { c: 'F', f: 'I' },
        0x1d43a: { c: 'G', f: 'I' },
        0x1d43b: { c: 'H', f: 'I' },
        0x1d43c: { c: 'I', f: 'I' },
        0x1d43d: { c: 'J', f: 'I' },
        0x1d43e: { c: 'K', f: 'I' },
        0x1d43f: { c: 'L', f: 'I' },
        0x1d440: { c: 'M', f: 'I' },
        0x1d441: { c: 'N', f: 'I' },
        0x1d442: { c: 'O', f: 'I' },
        0x1d443: { c: 'P', f: 'I' },
        0x1d444: { c: 'Q', f: 'I' },
        0x1d445: { c: 'R', f: 'I' },
        0x1d446: { c: 'S', f: 'I' },
        0x1d447: { c: 'T', f: 'I' },
        0x1d448: { c: 'U', f: 'I' },
        0x1d449: { c: 'V', f: 'I' },
        0x1d44a: { c: 'W', f: 'I' },
        0x1d44b: { c: 'X', f: 'I' },
        0x1d44c: { c: 'Y', f: 'I' },
        0x1d44d: { c: 'Z', f: 'I' },
        0x1d44e: { c: 'a', f: 'I' },
        0x1d44f: { c: 'b', f: 'I' },
        0x1d450: { c: 'c', f: 'I' },
        0x1d451: { c: 'd', f: 'I' },
        0x1d452: { c: 'e', f: 'I' },
        0x1d453: { c: 'f', f: 'I' },
        0x1d454: { c: 'g', f: 'I' },
        0x1d456: { c: 'i', f: 'I' },
        0x1d457: { c: 'j', f: 'I' },
        0x1d458: { c: 'k', f: 'I' },
        0x1d459: { c: 'l', f: 'I' },
        0x1d45a: { c: 'm', f: 'I' },
        0x1d45b: { c: 'n', f: 'I' },
        0x1d45c: { c: 'o', f: 'I' },
        0x1d45d: { c: 'p', f: 'I' },
        0x1d45e: { c: 'q', f: 'I' },
        0x1d45f: { c: 'r', f: 'I' },
        0x1d460: { c: 's', f: 'I' },
        0x1d461: { c: 't', f: 'I' },
        0x1d462: { c: 'u', f: 'I' },
        0x1d463: { c: 'v', f: 'I' },
        0x1d464: { c: 'w', f: 'I' },
        0x1d465: { c: 'x', f: 'I' },
        0x1d466: { c: 'y', f: 'I' },
        0x1d467: { c: 'z', f: 'I' },
        0x1d468: { c: 'A', f: 'BI' },
        0x1d469: { c: 'B', f: 'BI' },
        0x1d46a: { c: 'C', f: 'BI' },
        0x1d46b: { c: 'D', f: 'BI' },
        0x1d46c: { c: 'E', f: 'BI' },
        0x1d46d: { c: 'F', f: 'BI' },
        0x1d46e: { c: 'G', f: 'BI' },
        0x1d46f: { c: 'H', f: 'BI' },
        0x1d470: { c: 'I', f: 'BI' },
        0x1d471: { c: 'J', f: 'BI' },
        0x1d472: { c: 'K', f: 'BI' },
        0x1d473: { c: 'L', f: 'BI' },
        0x1d474: { c: 'M', f: 'BI' },
        0x1d475: { c: 'N', f: 'BI' },
        0x1d476: { c: 'O', f: 'BI' },
        0x1d477: { c: 'P', f: 'BI' },
        0x1d478: { c: 'Q', f: 'BI' },
        0x1d479: { c: 'R', f: 'BI' },
        0x1d47a: { c: 'S', f: 'BI' },
        0x1d47b: { c: 'T', f: 'BI' },
        0x1d47c: { c: 'U', f: 'BI' },
        0x1d47d: { c: 'V', f: 'BI' },
        0x1d47e: { c: 'W', f: 'BI' },
        0x1d47f: { c: 'X', f: 'BI' },
        0x1d480: { c: 'Y', f: 'BI' },
        0x1d481: { c: 'Z', f: 'BI' },
        0x1d482: { c: 'a', f: 'BI' },
        0x1d483: { c: 'b', f: 'BI' },
        0x1d484: { c: 'c', f: 'BI' },
        0x1d485: { c: 'd', f: 'BI' },
        0x1d486: { c: 'e', f: 'BI' },
        0x1d487: { c: 'f', f: 'BI' },
        0x1d488: { c: 'g', f: 'BI' },
        0x1d489: { c: 'h', f: 'BI' },
        0x1d48a: { c: 'i', f: 'BI' },
        0x1d48b: { c: 'j', f: 'BI' },
        0x1d48c: { c: 'k', f: 'BI' },
        0x1d48d: { c: 'l', f: 'BI' },
        0x1d48e: { c: 'm', f: 'BI' },
        0x1d48f: { c: 'n', f: 'BI' },
        0x1d490: { c: 'o', f: 'BI' },
        0x1d491: { c: 'p', f: 'BI' },
        0x1d492: { c: 'q', f: 'BI' },
        0x1d493: { c: 'r', f: 'BI' },
        0x1d494: { c: 's', f: 'BI' },
        0x1d495: { c: 't', f: 'BI' },
        0x1d496: { c: 'u', f: 'BI' },
        0x1d497: { c: 'v', f: 'BI' },
        0x1d498: { c: 'w', f: 'BI' },
        0x1d499: { c: 'x', f: 'BI' },
        0x1d49a: { c: 'y', f: 'BI' },
        0x1d49b: { c: 'z', f: 'BI' },
        0x1d49c: { c: 'A', f: 'SC' },
        0x1d49e: { c: 'C', f: 'SC' },
        0x1d49f: { c: 'D', f: 'SC' },
        0x1d4a2: { c: 'G', f: 'SC' },
        0x1d4a5: { c: 'J', f: 'SC' },
        0x1d4a6: { c: 'K', f: 'SC' },
        0x1d4a9: { c: 'N', f: 'SC' },
        0x1d4aa: { c: 'O', f: 'SC' },
        0x1d4ab: { c: 'P', f: 'SC' },
        0x1d4ac: { c: 'Q', f: 'SC' },
        0x1d4ae: { c: 'S', f: 'SC' },
        0x1d4af: { c: 'T', f: 'SC' },
        0x1d4b0: { c: 'U', f: 'SC' },
        0x1d4b1: { c: 'V', f: 'SC' },
        0x1d4b2: { c: 'W', f: 'SC' },
        0x1d4b3: { c: 'X', f: 'SC' },
        0x1d4b4: { c: 'Y', f: 'SC' },
        0x1d4b5: { c: 'Z', f: 'SC' },
        0x1d504: { c: 'A', f: 'FR' },
        0x1d505: { c: 'B', f: 'FR' },
        0x1d507: { c: 'D', f: 'FR' },
        0x1d508: { c: 'E', f: 'FR' },
        0x1d509: { c: 'F', f: 'FR' },
        0x1d50a: { c: 'G', f: 'FR' },
        0x1d50d: { c: 'J', f: 'FR' },
        0x1d50e: { c: 'K', f: 'FR' },
        0x1d50f: { c: 'L', f: 'FR' },
        0x1d510: { c: 'M', f: 'FR' },
        0x1d511: { c: 'N', f: 'FR' },
        0x1d512: { c: 'O', f: 'FR' },
        0x1d513: { c: 'P', f: 'FR' },
        0x1d514: { c: 'Q', f: 'FR' },
        0x1d516: { c: 'S', f: 'FR' },
        0x1d517: { c: 'T', f: 'FR' },
        0x1d518: { c: 'U', f: 'FR' },
        0x1d519: { c: 'V', f: 'FR' },
        0x1d51a: { c: 'W', f: 'FR' },
        0x1d51b: { c: 'X', f: 'FR' },
        0x1d51c: { c: 'Y', f: 'FR' },
        0x1d51e: { c: 'a', f: 'FR' },
        0x1d51f: { c: 'b', f: 'FR' },
        0x1d520: { c: 'c', f: 'FR' },
        0x1d521: { c: 'd', f: 'FR' },
        0x1d522: { c: 'e', f: 'FR' },
        0x1d523: { c: 'f', f: 'FR' },
        0x1d524: { c: 'g', f: 'FR' },
        0x1d525: { c: 'h', f: 'FR' },
        0x1d526: { c: 'i', f: 'FR' },
        0x1d527: { c: 'j', f: 'FR' },
        0x1d528: { c: 'k', f: 'FR' },
        0x1d529: { c: 'l', f: 'FR' },
        0x1d52a: { c: 'm', f: 'FR' },
        0x1d52b: { c: 'n', f: 'FR' },
        0x1d52c: { c: 'o', f: 'FR' },
        0x1d52d: { c: 'p', f: 'FR' },
        0x1d52e: { c: 'q', f: 'FR' },
        0x1d52f: { c: 'r', f: 'FR' },
        0x1d530: { c: 's', f: 'FR' },
        0x1d531: { c: 't', f: 'FR' },
        0x1d532: { c: 'u', f: 'FR' },
        0x1d533: { c: 'v', f: 'FR' },
        0x1d534: { c: 'w', f: 'FR' },
        0x1d535: { c: 'x', f: 'FR' },
        0x1d536: { c: 'y', f: 'FR' },
        0x1d537: { c: 'z', f: 'FR' },
        0x1d538: { c: 'A', f: 'A' },
        0x1d539: { c: 'B', f: 'A' },
        0x1d53b: { c: 'D', f: 'A' },
        0x1d53c: { c: 'E', f: 'A' },
        0x1d53d: { c: 'F', f: 'A' },
        0x1d53e: { c: 'G', f: 'A' },
        0x1d540: { c: 'I', f: 'A' },
        0x1d541: { c: 'J', f: 'A' },
        0x1d542: { c: 'K', f: 'A' },
        0x1d543: { c: 'L', f: 'A' },
        0x1d544: { c: 'M', f: 'A' },
        0x1d546: { c: 'O', f: 'A' },
        0x1d54a: { c: 'S', f: 'A' },
        0x1d54b: { c: 'T', f: 'A' },
        0x1d54c: { c: 'U', f: 'A' },
        0x1d54d: { c: 'V', f: 'A' },
        0x1d54e: { c: 'W', f: 'A' },
        0x1d54f: { c: 'X', f: 'A' },
        0x1d550: { c: 'Y', f: 'A' },
        0x1d56c: { c: 'A', f: 'FRB' },
        0x1d56d: { c: 'B', f: 'FRB' },
        0x1d56e: { c: 'C', f: 'FRB' },
        0x1d56f: { c: 'D', f: 'FRB' },
        0x1d570: { c: 'E', f: 'FRB' },
        0x1d571: { c: 'F', f: 'FRB' },
        0x1d572: { c: 'G', f: 'FRB' },
        0x1d573: { c: 'H', f: 'FRB' },
        0x1d574: { c: 'I', f: 'FRB' },
        0x1d575: { c: 'J', f: 'FRB' },
        0x1d576: { c: 'K', f: 'FRB' },
        0x1d577: { c: 'L', f: 'FRB' },
        0x1d578: { c: 'M', f: 'FRB' },
        0x1d579: { c: 'N', f: 'FRB' },
        0x1d57a: { c: 'O', f: 'FRB' },
        0x1d57b: { c: 'P', f: 'FRB' },
        0x1d57c: { c: 'Q', f: 'FRB' },
        0x1d57d: { c: 'R', f: 'FRB' },
        0x1d57e: { c: 'S', f: 'FRB' },
        0x1d57f: { c: 'T', f: 'FRB' },
        0x1d580: { c: 'U', f: 'FRB' },
        0x1d581: { c: 'V', f: 'FRB' },
        0x1d582: { c: 'W', f: 'FRB' },
        0x1d583: { c: 'X', f: 'FRB' },
        0x1d584: { c: 'Y', f: 'FRB' },
        0x1d585: { c: 'Z', f: 'FRB' },
        0x1d586: { c: 'a', f: 'FRB' },
        0x1d587: { c: 'b', f: 'FRB' },
        0x1d588: { c: 'c', f: 'FRB' },
        0x1d589: { c: 'd', f: 'FRB' },
        0x1d58a: { c: 'e', f: 'FRB' },
        0x1d58b: { c: 'f', f: 'FRB' },
        0x1d58c: { c: 'g', f: 'FRB' },
        0x1d58d: { c: 'h', f: 'FRB' },
        0x1d58e: { c: 'i', f: 'FRB' },
        0x1d58f: { c: 'j', f: 'FRB' },
        0x1d590: { c: 'k', f: 'FRB' },
        0x1d591: { c: 'l', f: 'FRB' },
        0x1d592: { c: 'm', f: 'FRB' },
        0x1d593: { c: 'n', f: 'FRB' },
        0x1d594: { c: 'o', f: 'FRB' },
        0x1d595: { c: 'p', f: 'FRB' },
        0x1d596: { c: 'q', f: 'FRB' },
        0x1d597: { c: 'r', f: 'FRB' },
        0x1d598: { c: 's', f: 'FRB' },
        0x1d599: { c: 't', f: 'FRB' },
        0x1d59a: { c: 'u', f: 'FRB' },
        0x1d59b: { c: 'v', f: 'FRB' },
        0x1d59c: { c: 'w', f: 'FRB' },
        0x1d59d: { c: 'x', f: 'FRB' },
        0x1d59e: { c: 'y', f: 'FRB' },
        0x1d59f: { c: 'z', f: 'FRB' },
        0x1d5a0: { c: 'A', f: 'SS' },
        0x1d5a1: { c: 'B', f: 'SS' },
        0x1d5a2: { c: 'C', f: 'SS' },
        0x1d5a3: { c: 'D', f: 'SS' },
        0x1d5a4: { c: 'E', f: 'SS' },
        0x1d5a5: { c: 'F', f: 'SS' },
        0x1d5a6: { c: 'G', f: 'SS' },
        0x1d5a7: { c: 'H', f: 'SS' },
        0x1d5a8: { c: 'I', f: 'SS' },
        0x1d5a9: { c: 'J', f: 'SS' },
        0x1d5aa: { c: 'K', f: 'SS' },
        0x1d5ab: { c: 'L', f: 'SS' },
        0x1d5ac: { c: 'M', f: 'SS' },
        0x1d5ad: { c: 'N', f: 'SS' },
        0x1d5ae: { c: 'O', f: 'SS' },
        0x1d5af: { c: 'P', f: 'SS' },
        0x1d5b0: { c: 'Q', f: 'SS' },
        0x1d5b1: { c: 'R', f: 'SS' },
        0x1d5b2: { c: 'S', f: 'SS' },
        0x1d5b3: { c: 'T', f: 'SS' },
        0x1d5b4: { c: 'U', f: 'SS' },
        0x1d5b5: { c: 'V', f: 'SS' },
        0x1d5b6: { c: 'W', f: 'SS' },
        0x1d5b7: { c: 'X', f: 'SS' },
        0x1d5b8: { c: 'Y', f: 'SS' },
        0x1d5b9: { c: 'Z', f: 'SS' },
        0x1d5ba: { c: 'a', f: 'SS' },
        0x1d5bb: { c: 'b', f: 'SS' },
        0x1d5bc: { c: 'c', f: 'SS' },
        0x1d5bd: { c: 'd', f: 'SS' },
        0x1d5be: { c: 'e', f: 'SS' },
        0x1d5bf: { c: 'f', f: 'SS' },
        0x1d5c0: { c: 'g', f: 'SS' },
        0x1d5c1: { c: 'h', f: 'SS' },
        0x1d5c2: { c: 'i', f: 'SS' },
        0x1d5c3: { c: 'j', f: 'SS' },
        0x1d5c4: { c: 'k', f: 'SS' },
        0x1d5c5: { c: 'l', f: 'SS' },
        0x1d5c6: { c: 'm', f: 'SS' },
        0x1d5c7: { c: 'n', f: 'SS' },
        0x1d5c8: { c: 'o', f: 'SS' },
        0x1d5c9: { c: 'p', f: 'SS' },
        0x1d5ca: { c: 'q', f: 'SS' },
        0x1d5cb: { c: 'r', f: 'SS' },
        0x1d5cc: { c: 's', f: 'SS' },
        0x1d5cd: { c: 't', f: 'SS' },
        0x1d5ce: { c: 'u', f: 'SS' },
        0x1d5cf: { c: 'v', f: 'SS' },
        0x1d5d0: { c: 'w', f: 'SS' },
        0x1d5d1: { c: 'x', f: 'SS' },
        0x1d5d2: { c: 'y', f: 'SS' },
        0x1d5d3: { c: 'z', f: 'SS' },
        0x1d5d4: { c: 'A', f: 'SSB' },
        0x1d5d5: { c: 'B', f: 'SSB' },
        0x1d5d6: { c: 'C', f: 'SSB' },
        0x1d5d7: { c: 'D', f: 'SSB' },
        0x1d5d8: { c: 'E', f: 'SSB' },
        0x1d5d9: { c: 'F', f: 'SSB' },
        0x1d5da: { c: 'G', f: 'SSB' },
        0x1d5db: { c: 'H', f: 'SSB' },
        0x1d5dc: { c: 'I', f: 'SSB' },
        0x1d5dd: { c: 'J', f: 'SSB' },
        0x1d5de: { c: 'K', f: 'SSB' },
        0x1d5df: { c: 'L', f: 'SSB' },
        0x1d5e0: { c: 'M', f: 'SSB' },
        0x1d5e1: { c: 'N', f: 'SSB' },
        0x1d5e2: { c: 'O', f: 'SSB' },
        0x1d5e3: { c: 'P', f: 'SSB' },
        0x1d5e4: { c: 'Q', f: 'SSB' },
        0x1d5e5: { c: 'R', f: 'SSB' },
        0x1d5e6: { c: 'S', f: 'SSB' },
        0x1d5e7: { c: 'T', f: 'SSB' },
        0x1d5e8: { c: 'U', f: 'SSB' },
        0x1d5e9: { c: 'V', f: 'SSB' },
        0x1d5ea: { c: 'W', f: 'SSB' },
        0x1d5eb: { c: 'X', f: 'SSB' },
        0x1d5ec: { c: 'Y', f: 'SSB' },
        0x1d5ed: { c: 'Z', f: 'SSB' },
        0x1d5ee: { c: 'a', f: 'SSB' },
        0x1d5ef: { c: 'b', f: 'SSB' },
        0x1d5f0: { c: 'c', f: 'SSB' },
        0x1d5f1: { c: 'd', f: 'SSB' },
        0x1d5f2: { c: 'e', f: 'SSB' },
        0x1d5f3: { c: 'f', f: 'SSB' },
        0x1d5f4: { c: 'g', f: 'SSB' },
        0x1d5f5: { c: 'h', f: 'SSB' },
        0x1d5f6: { c: 'i', f: 'SSB' },
        0x1d5f7: { c: 'j', f: 'SSB' },
        0x1d5f8: { c: 'k', f: 'SSB' },
        0x1d5f9: { c: 'l', f: 'SSB' },
        0x1d5fa: { c: 'm', f: 'SSB' },
        0x1d5fb: { c: 'n', f: 'SSB' },
        0x1d5fc: { c: 'o', f: 'SSB' },
        0x1d5fd: { c: 'p', f: 'SSB' },
        0x1d5fe: { c: 'q', f: 'SSB' },
        0x1d5ff: { c: 'r', f: 'SSB' },
        0x1d600: { c: 's', f: 'SSB' },
        0x1d601: { c: 't', f: 'SSB' },
        0x1d602: { c: 'u', f: 'SSB' },
        0x1d603: { c: 'v', f: 'SSB' },
        0x1d604: { c: 'w', f: 'SSB' },
        0x1d605: { c: 'x', f: 'SSB' },
        0x1d606: { c: 'y', f: 'SSB' },
        0x1d607: { c: 'z', f: 'SSB' },
        0x1d608: { c: 'A', f: 'SSI' },
        0x1d609: { c: 'B', f: 'SSI' },
        0x1d60a: { c: 'C', f: 'SSI' },
        0x1d60b: { c: 'D', f: 'SSI' },
        0x1d60c: { c: 'E', f: 'SSI' },
        0x1d60d: { c: 'F', f: 'SSI' },
        0x1d60e: { c: 'G', f: 'SSI' },
        0x1d60f: { c: 'H', f: 'SSI' },
        0x1d610: { c: 'I', f: 'SSI' },
        0x1d611: { c: 'J', f: 'SSI' },
        0x1d612: { c: 'K', f: 'SSI' },
        0x1d613: { c: 'L', f: 'SSI' },
        0x1d614: { c: 'M', f: 'SSI' },
        0x1d615: { c: 'N', f: 'SSI' },
        0x1d616: { c: 'O', f: 'SSI' },
        0x1d617: { c: 'P', f: 'SSI' },
        0x1d618: { c: 'Q', f: 'SSI' },
        0x1d619: { c: 'R', f: 'SSI' },
        0x1d61a: { c: 'S', f: 'SSI' },
        0x1d61b: { c: 'T', f: 'SSI' },
        0x1d61c: { c: 'U', f: 'SSI' },
        0x1d61d: { c: 'V', f: 'SSI' },
        0x1d61e: { c: 'W', f: 'SSI' },
        0x1d61f: { c: 'X', f: 'SSI' },
        0x1d620: { c: 'Y', f: 'SSI' },
        0x1d621: { c: 'Z', f: 'SSI' },
        0x1d622: { c: 'a', f: 'SSI' },
        0x1d623: { c: 'b', f: 'SSI' },
        0x1d624: { c: 'c', f: 'SSI' },
        0x1d625: { c: 'd', f: 'SSI' },
        0x1d626: { c: 'e', f: 'SSI' },
        0x1d627: { c: 'f', f: 'SSI' },
        0x1d628: { c: 'g', f: 'SSI' },
        0x1d629: { c: 'h', f: 'SSI' },
        0x1d62a: { c: 'i', f: 'SSI' },
        0x1d62b: { c: 'j', f: 'SSI' },
        0x1d62c: { c: 'k', f: 'SSI' },
        0x1d62d: { c: 'l', f: 'SSI' },
        0x1d62e: { c: 'm', f: 'SSI' },
        0x1d62f: { c: 'n', f: 'SSI' },
        0x1d630: { c: 'o', f: 'SSI' },
        0x1d631: { c: 'p', f: 'SSI' },
        0x1d632: { c: 'q', f: 'SSI' },
        0x1d633: { c: 'r', f: 'SSI' },
        0x1d634: { c: 's', f: 'SSI' },
        0x1d635: { c: 't', f: 'SSI' },
        0x1d636: { c: 'u', f: 'SSI' },
        0x1d637: { c: 'v', f: 'SSI' },
        0x1d638: { c: 'w', f: 'SSI' },
        0x1d639: { c: 'x', f: 'SSI' },
        0x1d63a: { c: 'y', f: 'SSI' },
        0x1d63b: { c: 'z', f: 'SSI' },
        0x1d670: { c: 'A', f: 'T' },
        0x1d671: { c: 'B', f: 'T' },
        0x1d672: { c: 'C', f: 'T' },
        0x1d673: { c: 'D', f: 'T' },
        0x1d674: { c: 'E', f: 'T' },
        0x1d675: { c: 'F', f: 'T' },
        0x1d676: { c: 'G', f: 'T' },
        0x1d677: { c: 'H', f: 'T' },
        0x1d678: { c: 'I', f: 'T' },
        0x1d679: { c: 'J', f: 'T' },
        0x1d67a: { c: 'K', f: 'T' },
        0x1d67b: { c: 'L', f: 'T' },
        0x1d67c: { c: 'M', f: 'T' },
        0x1d67d: { c: 'N', f: 'T' },
        0x1d67e: { c: 'O', f: 'T' },
        0x1d67f: { c: 'P', f: 'T' },
        0x1d680: { c: 'Q', f: 'T' },
        0x1d681: { c: 'R', f: 'T' },
        0x1d682: { c: 'S', f: 'T' },
        0x1d683: { c: 'T', f: 'T' },
        0x1d684: { c: 'U', f: 'T' },
        0x1d685: { c: 'V', f: 'T' },
        0x1d686: { c: 'W', f: 'T' },
        0x1d687: { c: 'X', f: 'T' },
        0x1d688: { c: 'Y', f: 'T' },
        0x1d689: { c: 'Z', f: 'T' },
        0x1d68a: { c: 'a', f: 'T' },
        0x1d68b: { c: 'b', f: 'T' },
        0x1d68c: { c: 'c', f: 'T' },
        0x1d68d: { c: 'd', f: 'T' },
        0x1d68e: { c: 'e', f: 'T' },
        0x1d68f: { c: 'f', f: 'T' },
        0x1d690: { c: 'g', f: 'T' },
        0x1d691: { c: 'h', f: 'T' },
        0x1d692: { c: 'i', f: 'T' },
        0x1d693: { c: 'j', f: 'T' },
        0x1d694: { c: 'k', f: 'T' },
        0x1d695: { c: 'l', f: 'T' },
        0x1d696: { c: 'm', f: 'T' },
        0x1d697: { c: 'n', f: 'T' },
        0x1d698: { c: 'o', f: 'T' },
        0x1d699: { c: 'p', f: 'T' },
        0x1d69a: { c: 'q', f: 'T' },
        0x1d69b: { c: 'r', f: 'T' },
        0x1d69c: { c: 's', f: 'T' },
        0x1d69d: { c: 't', f: 'T' },
        0x1d69e: { c: 'u', f: 'T' },
        0x1d69f: { c: 'v', f: 'T' },
        0x1d6a0: { c: 'w', f: 'T' },
        0x1d6a1: { c: 'x', f: 'T' },
        0x1d6a2: { c: 'y', f: 'T' },
        0x1d6a3: { c: 'z', f: 'T' },
        0x1d6a8: { c: 'A', f: 'B' },
        0x1d6a9: { c: 'B', f: 'B' },
        0x1d6aa: { c: '\\393', f: 'B' },
        0x1d6ab: { c: '\\394', f: 'B' },
        0x1d6ac: { c: 'E', f: 'B' },
        0x1d6ad: { c: 'Z', f: 'B' },
        0x1d6ae: { c: 'H', f: 'B' },
        0x1d6af: { c: '\\398', f: 'B' },
        0x1d6b0: { c: 'I', f: 'B' },
        0x1d6b1: { c: 'K', f: 'B' },
        0x1d6b2: { c: '\\39B', f: 'B' },
        0x1d6b3: { c: 'M', f: 'B' },
        0x1d6b4: { c: 'N', f: 'B' },
        0x1d6b5: { c: '\\39E', f: 'B' },
        0x1d6b6: { c: 'O', f: 'B' },
        0x1d6b7: { c: '\\3A0', f: 'B' },
        0x1d6b8: { c: 'P', f: 'B' },
        0x1d6ba: { c: '\\3A3', f: 'B' },
        0x1d6bb: { c: 'T', f: 'B' },
        0x1d6bc: { c: '\\3A5', f: 'B' },
        0x1d6bd: { c: '\\3A6', f: 'B' },
        0x1d6be: { c: 'X', f: 'B' },
        0x1d6bf: { c: '\\3A8', f: 'B' },
        0x1d6c0: { c: '\\3A9', f: 'B' },
        0x1d6c1: { c: '\\2207', f: 'B' },
        0x1d6e2: { c: 'A', f: 'I' },
        0x1d6e3: { c: 'B', f: 'I' },
        0x1d6e4: { c: '\\393', f: 'I' },
        0x1d6e5: { c: '\\394', f: 'I' },
        0x1d6e6: { c: 'E', f: 'I' },
        0x1d6e7: { c: 'Z', f: 'I' },
        0x1d6e8: { c: 'H', f: 'I' },
        0x1d6e9: { c: '\\398', f: 'I' },
        0x1d6ea: { c: 'I', f: 'I' },
        0x1d6eb: { c: 'K', f: 'I' },
        0x1d6ec: { c: '\\39B', f: 'I' },
        0x1d6ed: { c: 'M', f: 'I' },
        0x1d6ee: { c: 'N', f: 'I' },
        0x1d6ef: { c: '\\39E', f: 'I' },
        0x1d6f0: { c: 'O', f: 'I' },
        0x1d6f1: { c: '\\3A0', f: 'I' },
        0x1d6f2: { c: 'P', f: 'I' },
        0x1d6f4: { c: '\\3A3', f: 'I' },
        0x1d6f5: { c: 'T', f: 'I' },
        0x1d6f6: { c: '\\3A5', f: 'I' },
        0x1d6f7: { c: '\\3A6', f: 'I' },
        0x1d6f8: { c: 'X', f: 'I' },
        0x1d6f9: { c: '\\3A8', f: 'I' },
        0x1d6fa: { c: '\\3A9', f: 'I' },
        0x1d6fc: { c: '\\3B1', f: 'I' },
        0x1d6fd: { c: '\\3B2', f: 'I' },
        0x1d6fe: { c: '\\3B3', f: 'I' },
        0x1d6ff: { c: '\\3B4', f: 'I' },
        0x1d700: { c: '\\3B5', f: 'I' },
        0x1d701: { c: '\\3B6', f: 'I' },
        0x1d702: { c: '\\3B7', f: 'I' },
        0x1d703: { c: '\\3B8', f: 'I' },
        0x1d704: { c: '\\3B9', f: 'I' },
        0x1d705: { c: '\\3BA', f: 'I' },
        0x1d706: { c: '\\3BB', f: 'I' },
        0x1d707: { c: '\\3BC', f: 'I' },
        0x1d708: { c: '\\3BD', f: 'I' },
        0x1d709: { c: '\\3BE', f: 'I' },
        0x1d70a: { c: '\\3BF', f: 'I' },
        0x1d70b: { c: '\\3C0', f: 'I' },
        0x1d70c: { c: '\\3C1', f: 'I' },
        0x1d70d: { c: '\\3C2', f: 'I' },
        0x1d70e: { c: '\\3C3', f: 'I' },
        0x1d70f: { c: '\\3C4', f: 'I' },
        0x1d710: { c: '\\3C5', f: 'I' },
        0x1d711: { c: '\\3C6', f: 'I' },
        0x1d712: { c: '\\3C7', f: 'I' },
        0x1d713: { c: '\\3C8', f: 'I' },
        0x1d714: { c: '\\3C9', f: 'I' },
        0x1d715: { c: '\\2202' },
        0x1d716: { c: '\\3F5', f: 'I' },
        0x1d717: { c: '\\3D1', f: 'I' },
        0x1d718: { c: '\\E009', f: 'A' },
        0x1d719: { c: '\\3D5', f: 'I' },
        0x1d71a: { c: '\\3F1', f: 'I' },
        0x1d71b: { c: '\\3D6', f: 'I' },
        0x1d71c: { c: 'A', f: 'BI' },
        0x1d71d: { c: 'B', f: 'BI' },
        0x1d71e: { c: '\\393', f: 'BI' },
        0x1d71f: { c: '\\394', f: 'BI' },
        0x1d720: { c: 'E', f: 'BI' },
        0x1d721: { c: 'Z', f: 'BI' },
        0x1d722: { c: 'H', f: 'BI' },
        0x1d723: { c: '\\398', f: 'BI' },
        0x1d724: { c: 'I', f: 'BI' },
        0x1d725: { c: 'K', f: 'BI' },
        0x1d726: { c: '\\39B', f: 'BI' },
        0x1d727: { c: 'M', f: 'BI' },
        0x1d728: { c: 'N', f: 'BI' },
        0x1d729: { c: '\\39E', f: 'BI' },
        0x1d72a: { c: 'O', f: 'BI' },
        0x1d72b: { c: '\\3A0', f: 'BI' },
        0x1d72c: { c: 'P', f: 'BI' },
        0x1d72e: { c: '\\3A3', f: 'BI' },
        0x1d72f: { c: 'T', f: 'BI' },
        0x1d730: { c: '\\3A5', f: 'BI' },
        0x1d731: { c: '\\3A6', f: 'BI' },
        0x1d732: { c: 'X', f: 'BI' },
        0x1d733: { c: '\\3A8', f: 'BI' },
        0x1d734: { c: '\\3A9', f: 'BI' },
        0x1d736: { c: '\\3B1', f: 'BI' },
        0x1d737: { c: '\\3B2', f: 'BI' },
        0x1d738: { c: '\\3B3', f: 'BI' },
        0x1d739: { c: '\\3B4', f: 'BI' },
        0x1d73a: { c: '\\3B5', f: 'BI' },
        0x1d73b: { c: '\\3B6', f: 'BI' },
        0x1d73c: { c: '\\3B7', f: 'BI' },
        0x1d73d: { c: '\\3B8', f: 'BI' },
        0x1d73e: { c: '\\3B9', f: 'BI' },
        0x1d73f: { c: '\\3BA', f: 'BI' },
        0x1d740: { c: '\\3BB', f: 'BI' },
        0x1d741: { c: '\\3BC', f: 'BI' },
        0x1d742: { c: '\\3BD', f: 'BI' },
        0x1d743: { c: '\\3BE', f: 'BI' },
        0x1d744: { c: '\\3BF', f: 'BI' },
        0x1d745: { c: '\\3C0', f: 'BI' },
        0x1d746: { c: '\\3C1', f: 'BI' },
        0x1d747: { c: '\\3C2', f: 'BI' },
        0x1d748: { c: '\\3C3', f: 'BI' },
        0x1d749: { c: '\\3C4', f: 'BI' },
        0x1d74a: { c: '\\3C5', f: 'BI' },
        0x1d74b: { c: '\\3C6', f: 'BI' },
        0x1d74c: { c: '\\3C7', f: 'BI' },
        0x1d74d: { c: '\\3C8', f: 'BI' },
        0x1d74e: { c: '\\3C9', f: 'BI' },
        0x1d74f: { c: '\\2202', f: 'B' },
        0x1d750: { c: '\\3F5', f: 'BI' },
        0x1d751: { c: '\\3D1', f: 'BI' },
        0x1d752: { c: '\\E009', f: 'A' },
        0x1d753: { c: '\\3D5', f: 'BI' },
        0x1d754: { c: '\\3F1', f: 'BI' },
        0x1d755: { c: '\\3D6', f: 'BI' },
        0x1d756: { c: 'A', f: 'SSB' },
        0x1d757: { c: 'B', f: 'SSB' },
        0x1d758: { c: '\\393', f: 'SSB' },
        0x1d759: { c: '\\394', f: 'SSB' },
        0x1d75a: { c: 'E', f: 'SSB' },
        0x1d75b: { c: 'Z', f: 'SSB' },
        0x1d75c: { c: 'H', f: 'SSB' },
        0x1d75d: { c: '\\398', f: 'SSB' },
        0x1d75e: { c: 'I', f: 'SSB' },
        0x1d75f: { c: 'K', f: 'SSB' },
        0x1d760: { c: '\\39B', f: 'SSB' },
        0x1d761: { c: 'M', f: 'SSB' },
        0x1d762: { c: 'N', f: 'SSB' },
        0x1d763: { c: '\\39E', f: 'SSB' },
        0x1d764: { c: 'O', f: 'SSB' },
        0x1d765: { c: '\\3A0', f: 'SSB' },
        0x1d766: { c: 'P', f: 'SSB' },
        0x1d768: { c: '\\3A3', f: 'SSB' },
        0x1d769: { c: 'T', f: 'SSB' },
        0x1d76a: { c: '\\3A5', f: 'SSB' },
        0x1d76b: { c: '\\3A6', f: 'SSB' },
        0x1d76c: { c: 'X', f: 'SSB' },
        0x1d76d: { c: '\\3A8', f: 'SSB' },
        0x1d76e: { c: '\\3A9', f: 'SSB' },
        0x1d7ce: { c: '0', f: 'B' },
        0x1d7cf: { c: '1', f: 'B' },
        0x1d7d0: { c: '2', f: 'B' },
        0x1d7d1: { c: '3', f: 'B' },
        0x1d7d2: { c: '4', f: 'B' },
        0x1d7d3: { c: '5', f: 'B' },
        0x1d7d4: { c: '6', f: 'B' },
        0x1d7d5: { c: '7', f: 'B' },
        0x1d7d6: { c: '8', f: 'B' },
        0x1d7d7: { c: '9', f: 'B' },
        0x1d7e2: { c: '0', f: 'SS' },
        0x1d7e3: { c: '1', f: 'SS' },
        0x1d7e4: { c: '2', f: 'SS' },
        0x1d7e5: { c: '3', f: 'SS' },
        0x1d7e6: { c: '4', f: 'SS' },
        0x1d7e7: { c: '5', f: 'SS' },
        0x1d7e8: { c: '6', f: 'SS' },
        0x1d7e9: { c: '7', f: 'SS' },
        0x1d7ea: { c: '8', f: 'SS' },
        0x1d7eb: { c: '9', f: 'SS' },
        0x1d7ec: { c: '0', f: 'SSB' },
        0x1d7ed: { c: '1', f: 'SSB' },
        0x1d7ee: { c: '2', f: 'SSB' },
        0x1d7ef: { c: '3', f: 'SSB' },
        0x1d7f0: { c: '4', f: 'SSB' },
        0x1d7f1: { c: '5', f: 'SSB' },
        0x1d7f2: { c: '6', f: 'SSB' },
        0x1d7f3: { c: '7', f: 'SSB' },
        0x1d7f4: { c: '8', f: 'SSB' },
        0x1d7f5: { c: '9', f: 'SSB' },
        0x1d7f6: { c: '0', f: 'T' },
        0x1d7f7: { c: '1', f: 'T' },
        0x1d7f8: { c: '2', f: 'T' },
        0x1d7f9: { c: '3', f: 'T' },
        0x1d7fa: { c: '4', f: 'T' },
        0x1d7fb: { c: '5', f: 'T' },
        0x1d7fc: { c: '6', f: 'T' },
        0x1d7fd: { c: '7', f: 'T' },
        0x1d7fe: { c: '8', f: 'T' },
        0x1d7ff: { c: '9', f: 'T' }
      });
      //# sourceMappingURL=normal.js.map

      /***/
    },

    /***/ 83356: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifBoldItalic = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var sans_serif_bold_italic_js_1 = __webpack_require__(47033);
      exports.sansSerifBoldItalic = (0, FontData_js_1.AddCSS)(
        sans_serif_bold_italic_js_1.sansSerifBoldItalic,
        {
          0x131: { f: 'SSB' },
          0x237: { f: 'SSB' }
        }
      );
      //# sourceMappingURL=sans-serif-bold-italic.js.map

      /***/
    },

    /***/ 11211: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifBold = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var sans_serif_bold_js_1 = __webpack_require__(94872);
      exports.sansSerifBold = (0, FontData_js_1.AddCSS)(
        sans_serif_bold_js_1.sansSerifBold,
        {
          0x2015: { c: '\\2014' },
          0x2017: { c: '_' },
          0x2044: { c: '/' },
          0x2206: { c: '\\394' }
        }
      );
      //# sourceMappingURL=sans-serif-bold.js.map

      /***/
    },

    /***/ 76316: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifItalic = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var sans_serif_italic_js_1 = __webpack_require__(9255);
      exports.sansSerifItalic = (0, FontData_js_1.AddCSS)(
        sans_serif_italic_js_1.sansSerifItalic,
        {
          0x391: { c: 'A' },
          0x392: { c: 'B' },
          0x395: { c: 'E' },
          0x396: { c: 'Z' },
          0x397: { c: 'H' },
          0x399: { c: 'I' },
          0x39a: { c: 'K' },
          0x39c: { c: 'M' },
          0x39d: { c: 'N' },
          0x39f: { c: 'O' },
          0x3a1: { c: 'P' },
          0x3a4: { c: 'T' },
          0x3a7: { c: 'X' },
          0x2015: { c: '\\2014' },
          0x2017: { c: '_' },
          0x2044: { c: '/' },
          0x2206: { c: '\\394' }
        }
      );
      //# sourceMappingURL=sans-serif-italic.js.map

      /***/
    },

    /***/ 16651: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerif = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var sans_serif_js_1 = __webpack_require__(83366);
      exports.sansSerif = (0, FontData_js_1.AddCSS)(sans_serif_js_1.sansSerif, {
        0x391: { c: 'A' },
        0x392: { c: 'B' },
        0x395: { c: 'E' },
        0x396: { c: 'Z' },
        0x397: { c: 'H' },
        0x399: { c: 'I' },
        0x39a: { c: 'K' },
        0x39c: { c: 'M' },
        0x39d: { c: 'N' },
        0x39f: { c: 'O' },
        0x3a1: { c: 'P' },
        0x3a4: { c: 'T' },
        0x3a7: { c: 'X' },
        0x2015: { c: '\\2014' },
        0x2017: { c: '_' },
        0x2044: { c: '/' },
        0x2206: { c: '\\394' }
      });
      //# sourceMappingURL=sans-serif.js.map

      /***/
    },

    /***/ 56755: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.scriptBold = void 0;
      var script_bold_js_1 = __webpack_require__(21616);
      Object.defineProperty(exports, 'scriptBold', {
        enumerable: true,
        get: function () {
          return script_bold_js_1.scriptBold;
        }
      });
      //# sourceMappingURL=script-bold.js.map

      /***/
    },

    /***/ 45491: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.script = void 0;
      var script_js_1 = __webpack_require__(24062);
      Object.defineProperty(exports, 'script', {
        enumerable: true,
        get: function () {
          return script_js_1.script;
        }
      });
      //# sourceMappingURL=script.js.map

      /***/
    },

    /***/ 7598: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.smallop = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var smallop_js_1 = __webpack_require__(22578);
      exports.smallop = (0, FontData_js_1.AddCSS)(smallop_js_1.smallop, {
        0x2044: { c: '/' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x2758: { c: '\\2223' },
        0x2a0c: { c: '\\222C\\222C' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' }
      });
      //# sourceMappingURL=smallop.js.map

      /***/
    },

    /***/ 83085: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texCalligraphicBold = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var tex_calligraphic_bold_js_1 = __webpack_require__(70286);
      exports.texCalligraphicBold = (0, FontData_js_1.AddCSS)(
        tex_calligraphic_bold_js_1.texCalligraphicBold,
        {
          0x131: { f: 'B' },
          0x237: { f: 'B' }
        }
      );
      //# sourceMappingURL=tex-calligraphic-bold.js.map

      /***/
    },

    /***/ 74681: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texCalligraphic = void 0;
      var tex_calligraphic_js_1 = __webpack_require__(57552);
      Object.defineProperty(exports, 'texCalligraphic', {
        enumerable: true,
        get: function () {
          return tex_calligraphic_js_1.texCalligraphic;
        }
      });
      //# sourceMappingURL=tex-calligraphic.js.map

      /***/
    },

    /***/ 91611: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texMathit = void 0;
      var tex_mathit_js_1 = __webpack_require__(24398);
      Object.defineProperty(exports, 'texMathit', {
        enumerable: true,
        get: function () {
          return tex_mathit_js_1.texMathit;
        }
      });
      //# sourceMappingURL=tex-mathit.js.map

      /***/
    },

    /***/ 56848: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texOldstyleBold = void 0;
      var tex_oldstyle_bold_js_1 = __webpack_require__(20628);
      Object.defineProperty(exports, 'texOldstyleBold', {
        enumerable: true,
        get: function () {
          return tex_oldstyle_bold_js_1.texOldstyleBold;
        }
      });
      //# sourceMappingURL=tex-oldstyle-bold.js.map

      /***/
    },

    /***/ 74878: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texOldstyle = void 0;
      var tex_oldstyle_js_1 = __webpack_require__(41855);
      Object.defineProperty(exports, 'texOldstyle', {
        enumerable: true,
        get: function () {
          return tex_oldstyle_js_1.texOldstyle;
        }
      });
      //# sourceMappingURL=tex-oldstyle.js.map

      /***/
    },

    /***/ 99652: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texSize3 = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var tex_size3_js_1 = __webpack_require__(75431);
      exports.texSize3 = (0, FontData_js_1.AddCSS)(tex_size3_js_1.texSize3, {
        0x2044: { c: '/' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' }
      });
      //# sourceMappingURL=tex-size3.js.map

      /***/
    },

    /***/ 39729: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texSize4 = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var tex_size4_js_1 = __webpack_require__(98278);
      exports.texSize4 = (0, FontData_js_1.AddCSS)(tex_size4_js_1.texSize4, {
        0x2044: { c: '/' },
        0x2329: { c: '\\27E8' },
        0x232a: { c: '\\27E9' },
        0x3008: { c: '\\27E8' },
        0x3009: { c: '\\27E9' },
        0xe155: { c: '\\E153\\E152' },
        0xe156: { c: '\\E151\\E150' }
      });
      //# sourceMappingURL=tex-size4.js.map

      /***/
    },

    /***/ 82599: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texVariant = void 0;
      var FontData_js_1 = __webpack_require__(92952);
      var tex_variant_js_1 = __webpack_require__(90456);
      exports.texVariant = (0, FontData_js_1.AddCSS)(
        tex_variant_js_1.texVariant,
        {
          0x3f0: { c: '\\E009' },
          0x210f: { f: '' },
          0x2224: { c: '\\E006' },
          0x2226: { c: '\\E007' },
          0x2268: { c: '\\E00C' },
          0x2269: { c: '\\E00D' },
          0x2270: { c: '\\E011' },
          0x2271: { c: '\\E00E' },
          0x2288: { c: '\\E016' },
          0x2289: { c: '\\E018' },
          0x228a: { c: '\\E01A' },
          0x228b: { c: '\\E01B' },
          0x2a87: { c: '\\E010' },
          0x2a88: { c: '\\E00F' },
          0x2acb: { c: '\\E017' },
          0x2acc: { c: '\\E019' }
        }
      );
      //# sourceMappingURL=tex-variant.js.map

      /***/
    },

    /***/ 30861: /***/ function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var __assign =
        (this && this.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      var __read =
        (this && this.__read) ||
        function (o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        };
      var __spreadArray =
        (this && this.__spreadArray) ||
        function (to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
      var __values =
        (this && this.__values) ||
        function (o) {
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(
            s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FontData = exports.NOSTRETCH = exports.H = exports.V = void 0;
      var Options_js_1 = __webpack_require__(34981);
      exports.V = 1;
      exports.H = 2;
      exports.NOSTRETCH = { dir: 0 };
      var FontData = (function () {
        function FontData(options) {
          var e_1, _a, e_2, _b;
          if (options === void 0) {
            options = null;
          }
          this.variant = {};
          this.delimiters = {};
          this.cssFontMap = {};
          this.remapChars = {};
          this.skewIcFactor = 0.75;
          var CLASS = this.constructor;
          this.options = (0, Options_js_1.userOptions)(
            (0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS),
            options
          );
          this.params = __assign({}, CLASS.defaultParams);
          this.sizeVariants = __spreadArray(
            [],
            __read(CLASS.defaultSizeVariants),
            false
          );
          this.stretchVariants = __spreadArray(
            [],
            __read(CLASS.defaultStretchVariants),
            false
          );
          this.cssFontMap = __assign({}, CLASS.defaultCssFonts);
          try {
            for (
              var _c = __values(Object.keys(this.cssFontMap)), _d = _c.next();
              !_d.done;
              _d = _c.next()
            ) {
              var name_1 = _d.value;
              if (this.cssFontMap[name_1][0] === 'unknown') {
                this.cssFontMap[name_1][0] = this.options.unknownFamily;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          this.cssFamilyPrefix = CLASS.defaultCssFamilyPrefix;
          this.createVariants(CLASS.defaultVariants);
          this.defineDelimiters(CLASS.defaultDelimiters);
          try {
            for (
              var _e = __values(Object.keys(CLASS.defaultChars)),
                _f = _e.next();
              !_f.done;
              _f = _e.next()
            ) {
              var name_2 = _f.value;
              this.defineChars(name_2, CLASS.defaultChars[name_2]);
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
          this.defineRemap('accent', CLASS.defaultAccentMap);
          this.defineRemap('mo', CLASS.defaultMoMap);
          this.defineRemap('mn', CLASS.defaultMnMap);
        }
        FontData.charOptions = function (font, n) {
          var char = font[n];
          if (char.length === 3) {
            char[3] = {};
          }
          return char[3];
        };
        Object.defineProperty(FontData.prototype, 'styles', {
          get: function () {
            return this._styles;
          },
          set: function (style) {
            this._styles = style;
          },
          enumerable: false,
          configurable: true
        });
        FontData.prototype.createVariant = function (name, inherit, link) {
          if (inherit === void 0) {
            inherit = null;
          }
          if (link === void 0) {
            link = null;
          }
          var variant = {
            linked: [],
            chars: inherit ? Object.create(this.variant[inherit].chars) : {}
          };
          if (link && this.variant[link]) {
            Object.assign(variant.chars, this.variant[link].chars);
            this.variant[link].linked.push(variant.chars);
            variant.chars = Object.create(variant.chars);
          }
          this.remapSmpChars(variant.chars, name);
          this.variant[name] = variant;
        };
        FontData.prototype.remapSmpChars = function (chars, name) {
          var e_3, _a, e_4, _b;
          var CLASS = this.constructor;
          if (CLASS.VariantSmp[name]) {
            var SmpRemap = CLASS.SmpRemap;
            var SmpGreek = [
              null,
              null,
              CLASS.SmpRemapGreekU,
              CLASS.SmpRemapGreekL
            ];
            try {
              for (
                var _c = __values(CLASS.SmpRanges), _d = _c.next();
                !_d.done;
                _d = _c.next()
              ) {
                var _e = __read(_d.value, 3),
                  i = _e[0],
                  lo = _e[1],
                  hi = _e[2];
                var base = CLASS.VariantSmp[name][i];
                if (!base) continue;
                for (var n = lo; n <= hi; n++) {
                  if (n === 0x3a2) continue;
                  var smp = base + n - lo;
                  chars[n] = this.smpChar(SmpRemap[smp] || smp);
                }
                if (SmpGreek[i]) {
                  try {
                    for (
                      var _f =
                          ((e_4 = void 0),
                          __values(
                            Object.keys(SmpGreek[i]).map(function (x) {
                              return parseInt(x);
                            })
                          )),
                        _g = _f.next();
                      !_g.done;
                      _g = _f.next()
                    ) {
                      var n = _g.value;
                      chars[n] = this.smpChar(base + SmpGreek[i][n]);
                    }
                  } catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                  } finally {
                    try {
                      if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    } finally {
                      if (e_4) throw e_4.error;
                    }
                  }
                }
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          }
          if (name === 'bold') {
            chars[0x3dc] = this.smpChar(0x1d7ca);
            chars[0x3dd] = this.smpChar(0x1d7cb);
          }
        };
        FontData.prototype.smpChar = function (n) {
          return [, , , { smp: n }];
        };
        FontData.prototype.createVariants = function (variants) {
          var e_5, _a;
          try {
            for (
              var variants_1 = __values(variants),
                variants_1_1 = variants_1.next();
              !variants_1_1.done;
              variants_1_1 = variants_1.next()
            ) {
              var variant = variants_1_1.value;
              this.createVariant(variant[0], variant[1], variant[2]);
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (
                variants_1_1 &&
                !variants_1_1.done &&
                (_a = variants_1.return)
              )
                _a.call(variants_1);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
        };
        FontData.prototype.defineChars = function (name, chars) {
          var e_6, _a;
          var variant = this.variant[name];
          Object.assign(variant.chars, chars);
          try {
            for (
              var _b = __values(variant.linked), _c = _b.next();
              !_c.done;
              _c = _b.next()
            ) {
              var link = _c.value;
              Object.assign(link, chars);
            }
          } catch (e_6_1) {
            e_6 = { error: e_6_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_6) throw e_6.error;
            }
          }
        };
        FontData.prototype.defineDelimiters = function (delims) {
          Object.assign(this.delimiters, delims);
        };
        FontData.prototype.defineRemap = function (name, remap) {
          if (!this.remapChars.hasOwnProperty(name)) {
            this.remapChars[name] = {};
          }
          Object.assign(this.remapChars[name], remap);
        };
        FontData.prototype.getDelimiter = function (n) {
          return this.delimiters[n];
        };
        FontData.prototype.getSizeVariant = function (n, i) {
          if (this.delimiters[n].variants) {
            i = this.delimiters[n].variants[i];
          }
          return this.sizeVariants[i];
        };
        FontData.prototype.getStretchVariant = function (n, i) {
          return this.stretchVariants[
            this.delimiters[n].stretchv ? this.delimiters[n].stretchv[i] : 0
          ];
        };
        FontData.prototype.getChar = function (name, n) {
          return this.variant[name].chars[n];
        };
        FontData.prototype.getVariant = function (name) {
          return this.variant[name];
        };
        FontData.prototype.getCssFont = function (variant) {
          return this.cssFontMap[variant] || ['serif', false, false];
        };
        FontData.prototype.getFamily = function (family) {
          return this.cssFamilyPrefix
            ? this.cssFamilyPrefix + ', ' + family
            : family;
        };
        FontData.prototype.getRemappedChar = function (name, c) {
          var map = this.remapChars[name] || {};
          return map[c];
        };
        FontData.OPTIONS = {
          unknownFamily: 'serif'
        };
        FontData.JAX = 'common';
        FontData.NAME = '';
        FontData.defaultVariants = [
          ['normal'],
          ['bold', 'normal'],
          ['italic', 'normal'],
          ['bold-italic', 'italic', 'bold'],
          ['double-struck', 'bold'],
          ['fraktur', 'normal'],
          ['bold-fraktur', 'bold', 'fraktur'],
          ['script', 'italic'],
          ['bold-script', 'bold-italic', 'script'],
          ['sans-serif', 'normal'],
          ['bold-sans-serif', 'bold', 'sans-serif'],
          ['sans-serif-italic', 'italic', 'sans-serif'],
          ['sans-serif-bold-italic', 'bold-italic', 'bold-sans-serif'],
          ['monospace', 'normal']
        ];
        FontData.defaultCssFonts = {
          normal: ['unknown', false, false],
          bold: ['unknown', false, true],
          italic: ['unknown', true, false],
          'bold-italic': ['unknown', true, true],
          'double-struck': ['unknown', false, true],
          fraktur: ['unknown', false, false],
          'bold-fraktur': ['unknown', false, true],
          script: ['cursive', false, false],
          'bold-script': ['cursive', false, true],
          'sans-serif': ['sans-serif', false, false],
          'bold-sans-serif': ['sans-serif', false, true],
          'sans-serif-italic': ['sans-serif', true, false],
          'sans-serif-bold-italic': ['sans-serif', true, true],
          monospace: ['monospace', false, false]
        };
        FontData.defaultCssFamilyPrefix = '';
        FontData.VariantSmp = {
          bold: [0x1d400, 0x1d41a, 0x1d6a8, 0x1d6c2, 0x1d7ce],
          italic: [0x1d434, 0x1d44e, 0x1d6e2, 0x1d6fc],
          'bold-italic': [0x1d468, 0x1d482, 0x1d71c, 0x1d736],
          script: [0x1d49c, 0x1d4b6],
          'bold-script': [0x1d4d0, 0x1d4ea],
          fraktur: [0x1d504, 0x1d51e],
          'double-struck': [0x1d538, 0x1d552, , , 0x1d7d8],
          'bold-fraktur': [0x1d56c, 0x1d586],
          'sans-serif': [0x1d5a0, 0x1d5ba, , , 0x1d7e2],
          'bold-sans-serif': [0x1d5d4, 0x1d5ee, 0x1d756, 0x1d770, 0x1d7ec],
          'sans-serif-italic': [0x1d608, 0x1d622],
          'sans-serif-bold-italic': [0x1d63c, 0x1d656, 0x1d790, 0x1d7aa],
          monospace: [0x1d670, 0x1d68a, , , 0x1d7f6]
        };
        FontData.SmpRanges = [
          [0, 0x41, 0x5a],
          [1, 0x61, 0x7a],
          [2, 0x391, 0x3a9],
          [3, 0x3b1, 0x3c9],
          [4, 0x30, 0x39]
        ];
        FontData.SmpRemap = {
          0x1d455: 0x210e,
          0x1d49d: 0x212c,
          0x1d4a0: 0x2130,
          0x1d4a1: 0x2131,
          0x1d4a3: 0x210b,
          0x1d4a4: 0x2110,
          0x1d4a7: 0x2112,
          0x1d4a8: 0x2133,
          0x1d4ad: 0x211b,
          0x1d4ba: 0x212f,
          0x1d4bc: 0x210a,
          0x1d4c4: 0x2134,
          0x1d506: 0x212d,
          0x1d50b: 0x210c,
          0x1d50c: 0x2111,
          0x1d515: 0x211c,
          0x1d51d: 0x2128,
          0x1d53a: 0x2102,
          0x1d53f: 0x210d,
          0x1d545: 0x2115,
          0x1d547: 0x2119,
          0x1d548: 0x211a,
          0x1d549: 0x211d,
          0x1d551: 0x2124
        };
        FontData.SmpRemapGreekU = {
          0x2207: 0x19,
          0x03f4: 0x11
        };
        FontData.SmpRemapGreekL = {
          0x3d1: 0x1b,
          0x3d5: 0x1d,
          0x3d6: 0x1f,
          0x3f0: 0x1c,
          0x3f1: 0x1e,
          0x3f5: 0x1a,
          0x2202: 0x19
        };
        FontData.defaultAccentMap = {
          0x0300: '\u02CB',
          0x0301: '\u02CA',
          0x0302: '\u02C6',
          0x0303: '\u02DC',
          0x0304: '\u02C9',
          0x0306: '\u02D8',
          0x0307: '\u02D9',
          0x0308: '\u00A8',
          0x030a: '\u02DA',
          0x030c: '\u02C7',
          0x2192: '\u20D7',
          0x2032: "'",
          0x2033: "''",
          0x2034: "'''",
          0x2035: '`',
          0x2036: '``',
          0x2037: '```',
          0x2057: "''''",
          0x20d0: '\u21BC',
          0x20d1: '\u21C0',
          0x20d6: '\u2190',
          0x20e1: '\u2194',
          0x20f0: '*',
          0x20db: '...',
          0x20dc: '....',
          0x20ec: '\u21C1',
          0x20ed: '\u21BD',
          0x20ee: '\u2190',
          0x20ef: '\u2192'
        };
        FontData.defaultMoMap = {
          0x002d: '\u2212'
        };
        FontData.defaultMnMap = {
          0x002d: '\u2212'
        };
        FontData.defaultParams = {
          x_height: 0.442,
          quad: 1,
          num1: 0.676,
          num2: 0.394,
          num3: 0.444,
          denom1: 0.686,
          denom2: 0.345,
          sup1: 0.413,
          sup2: 0.363,
          sup3: 0.289,
          sub1: 0.15,
          sub2: 0.247,
          sup_drop: 0.386,
          sub_drop: 0.05,
          delim1: 2.39,
          delim2: 1.0,
          axis_height: 0.25,
          rule_thickness: 0.06,
          big_op_spacing1: 0.111,
          big_op_spacing2: 0.167,
          big_op_spacing3: 0.2,
          big_op_spacing4: 0.6,
          big_op_spacing5: 0.1,
          surd_height: 0.075,
          scriptspace: 0.05,
          nulldelimiterspace: 0.12,
          delimiterfactor: 901,
          delimitershortfall: 0.3,
          min_rule_thickness: 1.25,
          separation_factor: 1.75,
          extra_ic: 0.033
        };
        FontData.defaultDelimiters = {};
        FontData.defaultChars = {};
        FontData.defaultSizeVariants = [];
        FontData.defaultStretchVariants = [];
        return FontData;
      })();
      exports.FontData = FontData;
      //# sourceMappingURL=FontData.js.map

      /***/
    },

    /***/ 6382: /***/ function (__unused_webpack_module, exports) {
      var __extends =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (d, b) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b;
                }) ||
              function (d, b) {
                for (var p in b)
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
              };
            return extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== 'function' && b !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(b) +
                  ' is not a constructor or null'
              );
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          };
        })();
      var __assign =
        (this && this.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      var __read =
        (this && this.__read) ||
        function (o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        };
      var __spreadArray =
        (this && this.__spreadArray) ||
        function (to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CommonTeXFontMixin = void 0;
      function CommonTeXFontMixin(Base) {
        var _a;
        return (
          (_a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
              return (_super !== null && _super.apply(this, arguments)) || this;
            }
            class_1.prototype.getDelimiterData = function (n) {
              return this.getChar('-smallop', n) || this.getChar('-size4', n);
            };
            return class_1;
          })(Base)),
          (_a.NAME = 'TeX'),
          (_a.defaultVariants = __spreadArray(
            __spreadArray([], __read(Base.defaultVariants), false),
            [
              ['-smallop', 'normal'],
              ['-largeop', 'normal'],
              ['-size3', 'normal'],
              ['-size4', 'normal'],
              ['-tex-calligraphic', 'italic'],
              ['-tex-bold-calligraphic', 'bold-italic'],
              ['-tex-oldstyle', 'normal'],
              ['-tex-bold-oldstyle', 'bold'],
              ['-tex-mathit', 'italic'],
              ['-tex-variant', 'normal']
            ],
            false
          )),
          (_a.defaultCssFonts = __assign(__assign({}, Base.defaultCssFonts), {
            '-smallop': ['serif', false, false],
            '-largeop': ['serif', false, false],
            '-size3': ['serif', false, false],
            '-size4': ['serif', false, false],
            '-tex-calligraphic': ['cursive', true, false],
            '-tex-bold-calligraphic': ['cursive', true, true],
            '-tex-oldstyle': ['serif', false, false],
            '-tex-bold-oldstyle': ['serif', false, true],
            '-tex-mathit': ['serif', true, false]
          })),
          (_a.defaultSizeVariants = [
            'normal',
            '-smallop',
            '-largeop',
            '-size3',
            '-size4',
            '-tex-variant'
          ]),
          (_a.defaultStretchVariants = ['-size4']),
          _a
        );
      }
      exports.CommonTeXFontMixin = CommonTeXFontMixin;
      //# sourceMappingURL=tex.js.map

      /***/
    },

    /***/ 51091: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.boldItalic = void 0;
      exports.boldItalic = {
        0x2f: [0.711, 0.21, 0.894],
        0x131: [0.452, 0.008, 0.394, { sk: 0.0319 }],
        0x237: [0.451, 0.201, 0.439, { sk: 0.0958 }],
        0x2044: [0.711, 0.21, 0.894],
        0x2206: [0.711, 0, 0.958, { sk: 0.192 }],
        0x29f8: [0.711, 0.21, 0.894]
      };
      //# sourceMappingURL=bold-italic.js.map

      /***/
    },

    /***/ 95746: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.bold = void 0;
      exports.bold = {
        0x21: [0.705, 0, 0.35],
        0x22: [0.694, -0.329, 0.603],
        0x23: [0.694, 0.193, 0.958],
        0x24: [0.75, 0.056, 0.575],
        0x25: [0.75, 0.056, 0.958],
        0x26: [0.705, 0.011, 0.894],
        0x27: [0.694, -0.329, 0.319],
        0x28: [0.75, 0.249, 0.447],
        0x29: [0.75, 0.249, 0.447],
        0x2a: [0.75, -0.306, 0.575],
        0x2b: [0.633, 0.131, 0.894],
        0x2c: [0.171, 0.194, 0.319],
        0x2d: [0.278, -0.166, 0.383],
        0x2e: [0.171, 0, 0.319],
        0x2f: [0.75, 0.25, 0.575],
        0x3a: [0.444, 0, 0.319],
        0x3b: [0.444, 0.194, 0.319],
        0x3c: [0.587, 0.085, 0.894],
        0x3d: [0.393, -0.109, 0.894],
        0x3e: [0.587, 0.085, 0.894],
        0x3f: [0.7, 0, 0.543],
        0x40: [0.699, 0.006, 0.894],
        0x5b: [0.75, 0.25, 0.319],
        0x5c: [0.75, 0.25, 0.575],
        0x5d: [0.75, 0.25, 0.319],
        0x5e: [0.694, -0.52, 0.575],
        0x5f: [-0.01, 0.061, 0.575],
        0x60: [0.706, -0.503, 0.575],
        0x7b: [0.75, 0.25, 0.575],
        0x7c: [0.75, 0.249, 0.319],
        0x7d: [0.75, 0.25, 0.575],
        0x7e: [0.344, -0.202, 0.575],
        0xa8: [0.695, -0.535, 0.575],
        0xac: [0.371, -0.061, 0.767],
        0xaf: [0.607, -0.54, 0.575],
        0xb0: [0.702, -0.536, 0.575],
        0xb1: [0.728, 0.035, 0.894],
        0xb4: [0.706, -0.503, 0.575],
        0xb7: [0.336, -0.166, 0.319],
        0xd7: [0.53, 0.028, 0.894],
        0xf7: [0.597, 0.096, 0.894],
        0x131: [0.442, 0, 0.278, { sk: 0.0278 }],
        0x237: [0.442, 0.205, 0.306, { sk: 0.0833 }],
        0x2b9: [0.563, -0.033, 0.344],
        0x2c6: [0.694, -0.52, 0.575],
        0x2c7: [0.66, -0.515, 0.575],
        0x2c9: [0.607, -0.54, 0.575],
        0x2ca: [0.706, -0.503, 0.575],
        0x2cb: [0.706, -0.503, 0.575],
        0x2d8: [0.694, -0.5, 0.575],
        0x2d9: [0.695, -0.525, 0.575],
        0x2da: [0.702, -0.536, 0.575],
        0x2dc: [0.694, -0.552, 0.575],
        0x300: [0.706, -0.503, 0],
        0x301: [0.706, -0.503, 0],
        0x302: [0.694, -0.52, 0],
        0x303: [0.694, -0.552, 0],
        0x304: [0.607, -0.54, 0],
        0x306: [0.694, -0.5, 0],
        0x307: [0.695, -0.525, 0],
        0x308: [0.695, -0.535, 0],
        0x30a: [0.702, -0.536, 0],
        0x30b: [0.714, -0.511, 0],
        0x30c: [0.66, -0.515, 0],
        0x338: [0.711, 0.21, 0],
        0x2002: [0, 0, 0.5],
        0x2003: [0, 0, 0.999],
        0x2004: [0, 0, 0.333],
        0x2005: [0, 0, 0.25],
        0x2006: [0, 0, 0.167],
        0x2009: [0, 0, 0.167],
        0x200a: [0, 0, 0.083],
        0x2013: [0.3, -0.249, 0.575],
        0x2014: [0.3, -0.249, 1.15],
        0x2015: [0.3, -0.249, 1.15],
        0x2016: [0.75, 0.248, 0.575],
        0x2017: [-0.01, 0.061, 0.575],
        0x2018: [0.694, -0.329, 0.319],
        0x2019: [0.694, -0.329, 0.319],
        0x201c: [0.694, -0.329, 0.603],
        0x201d: [0.694, -0.329, 0.603],
        0x2020: [0.702, 0.211, 0.511],
        0x2021: [0.702, 0.202, 0.511],
        0x2022: [0.474, -0.028, 0.575],
        0x2026: [0.171, 0, 1.295],
        0x2032: [0.563, -0.033, 0.344],
        0x2033: [0.563, 0, 0.688],
        0x2034: [0.563, 0, 1.032],
        0x203e: [0.607, -0.54, 0.575],
        0x2044: [0.75, 0.25, 0.575],
        0x2057: [0.563, 0, 1.376],
        0x20d7: [0.723, -0.513, 0.575],
        0x210f: [0.694, 0.008, 0.668, { sk: -0.0319 }],
        0x2113: [0.702, 0.019, 0.474, { sk: 0.128 }],
        0x2118: [0.461, 0.21, 0.74],
        0x2135: [0.694, 0, 0.703],
        0x2190: [0.518, 0.017, 1.15],
        0x2191: [0.694, 0.193, 0.575],
        0x2192: [0.518, 0.017, 1.15],
        0x2193: [0.694, 0.194, 0.575],
        0x2194: [0.518, 0.017, 1.15],
        0x2195: [0.767, 0.267, 0.575],
        0x2196: [0.724, 0.194, 1.15],
        0x2197: [0.724, 0.193, 1.15],
        0x2198: [0.694, 0.224, 1.15],
        0x2199: [0.694, 0.224, 1.15],
        0x219a: [0.711, 0.21, 1.15],
        0x219b: [0.711, 0.21, 1.15],
        0x21a6: [0.518, 0.017, 1.15],
        0x21a9: [0.518, 0.017, 1.282],
        0x21aa: [0.518, 0.017, 1.282],
        0x21ae: [0.711, 0.21, 1.15],
        0x21bc: [0.518, -0.22, 1.15],
        0x21bd: [0.281, 0.017, 1.15],
        0x21c0: [0.518, -0.22, 1.15],
        0x21c1: [0.281, 0.017, 1.15],
        0x21cc: [0.718, 0.017, 1.15],
        0x21cd: [0.711, 0.21, 1.15],
        0x21ce: [0.711, 0.21, 1.15],
        0x21cf: [0.711, 0.21, 1.15],
        0x21d0: [0.547, 0.046, 1.15],
        0x21d1: [0.694, 0.193, 0.703],
        0x21d2: [0.547, 0.046, 1.15],
        0x21d3: [0.694, 0.194, 0.703],
        0x21d4: [0.547, 0.046, 1.15],
        0x21d5: [0.767, 0.267, 0.703],
        0x2200: [0.694, 0.016, 0.639],
        0x2203: [0.694, 0, 0.639],
        0x2204: [0.711, 0.21, 0.639],
        0x2205: [0.767, 0.073, 0.575],
        0x2206: [0.698, 0, 0.958],
        0x2208: [0.587, 0.086, 0.767],
        0x2209: [0.711, 0.21, 0.767],
        0x220b: [0.587, 0.086, 0.767],
        0x220c: [0.711, 0.21, 0.767],
        0x2212: [0.281, -0.221, 0.894],
        0x2213: [0.537, 0.227, 0.894],
        0x2215: [0.75, 0.25, 0.575],
        0x2216: [0.75, 0.25, 0.575],
        0x2217: [0.472, -0.028, 0.575],
        0x2218: [0.474, -0.028, 0.575],
        0x2219: [0.474, -0.028, 0.575],
        0x221a: [0.82, 0.18, 0.958, { ic: 0.03 }],
        0x221d: [0.451, 0.008, 0.894],
        0x221e: [0.452, 0.008, 1.15],
        0x2220: [0.714, 0, 0.722],
        0x2223: [0.75, 0.249, 0.319],
        0x2224: [0.75, 0.249, 0.319],
        0x2225: [0.75, 0.248, 0.575],
        0x2226: [0.75, 0.248, 0.575],
        0x2227: [0.604, 0.017, 0.767],
        0x2228: [0.604, 0.016, 0.767],
        0x2229: [0.603, 0.016, 0.767],
        0x222a: [0.604, 0.016, 0.767],
        0x222b: [0.711, 0.211, 0.569, { ic: 0.063 }],
        0x223c: [0.391, -0.109, 0.894],
        0x2240: [0.583, 0.082, 0.319],
        0x2241: [0.711, 0.21, 0.894],
        0x2243: [0.502, 0, 0.894],
        0x2244: [0.711, 0.21, 0.894],
        0x2245: [0.638, 0.027, 0.894],
        0x2247: [0.711, 0.21, 0.894],
        0x2248: [0.524, -0.032, 0.894],
        0x2249: [0.711, 0.21, 0.894],
        0x224d: [0.533, 0.032, 0.894],
        0x2250: [0.721, -0.109, 0.894],
        0x2260: [0.711, 0.21, 0.894],
        0x2261: [0.505, 0, 0.894],
        0x2262: [0.711, 0.21, 0.894],
        0x2264: [0.697, 0.199, 0.894],
        0x2265: [0.697, 0.199, 0.894],
        0x226a: [0.617, 0.116, 1.15],
        0x226b: [0.618, 0.116, 1.15],
        0x226d: [0.711, 0.21, 0.894],
        0x226e: [0.711, 0.21, 0.894],
        0x226f: [0.711, 0.21, 0.894],
        0x2270: [0.711, 0.21, 0.894],
        0x2271: [0.711, 0.21, 0.894],
        0x227a: [0.585, 0.086, 0.894],
        0x227b: [0.586, 0.086, 0.894],
        0x2280: [0.711, 0.21, 0.894],
        0x2281: [0.711, 0.21, 0.894],
        0x2282: [0.587, 0.085, 0.894],
        0x2283: [0.587, 0.086, 0.894],
        0x2284: [0.711, 0.21, 0.894],
        0x2285: [0.711, 0.21, 0.894],
        0x2286: [0.697, 0.199, 0.894],
        0x2287: [0.697, 0.199, 0.894],
        0x2288: [0.711, 0.21, 0.894],
        0x2289: [0.711, 0.21, 0.894],
        0x228e: [0.604, 0.016, 0.767],
        0x2291: [0.697, 0.199, 0.894],
        0x2292: [0.697, 0.199, 0.894],
        0x2293: [0.604, 0, 0.767],
        0x2294: [0.604, 0, 0.767],
        0x2295: [0.632, 0.132, 0.894],
        0x2296: [0.632, 0.132, 0.894],
        0x2297: [0.632, 0.132, 0.894],
        0x2298: [0.632, 0.132, 0.894],
        0x2299: [0.632, 0.132, 0.894],
        0x22a2: [0.693, 0, 0.703],
        0x22a3: [0.693, 0, 0.703],
        0x22a4: [0.694, 0, 0.894],
        0x22a5: [0.693, 0, 0.894],
        0x22a8: [0.75, 0.249, 0.974],
        0x22ac: [0.711, 0.21, 0.703],
        0x22ad: [0.75, 0.249, 0.974],
        0x22c4: [0.523, 0.021, 0.575],
        0x22c5: [0.336, -0.166, 0.319],
        0x22c6: [0.502, 0, 0.575],
        0x22c8: [0.54, 0.039, 1],
        0x22e2: [0.711, 0.21, 0.894],
        0x22e3: [0.711, 0.21, 0.894],
        0x22ee: [0.951, 0.029, 0.319],
        0x22ef: [0.336, -0.166, 1.295],
        0x22f1: [0.871, -0.101, 1.323],
        0x2308: [0.75, 0.248, 0.511],
        0x2309: [0.75, 0.248, 0.511],
        0x230a: [0.749, 0.248, 0.511],
        0x230b: [0.749, 0.248, 0.511],
        0x2322: [0.405, -0.108, 1.15],
        0x2323: [0.392, -0.126, 1.15],
        0x2329: [0.75, 0.249, 0.447],
        0x232a: [0.75, 0.249, 0.447],
        0x25b3: [0.711, 0, 1.022],
        0x25b5: [0.711, 0, 1.022],
        0x25b9: [0.54, 0.039, 0.575],
        0x25bd: [0.5, 0.21, 1.022],
        0x25bf: [0.5, 0.21, 1.022],
        0x25c3: [0.539, 0.038, 0.575],
        0x25ef: [0.711, 0.211, 1.15],
        0x2660: [0.719, 0.129, 0.894],
        0x2661: [0.711, 0.024, 0.894],
        0x2662: [0.719, 0.154, 0.894],
        0x2663: [0.719, 0.129, 0.894],
        0x266d: [0.75, 0.017, 0.447],
        0x266e: [0.741, 0.223, 0.447],
        0x266f: [0.724, 0.224, 0.447],
        0x2758: [0.75, 0.249, 0.319],
        0x27e8: [0.75, 0.249, 0.447],
        0x27e9: [0.75, 0.249, 0.447],
        0x27f5: [0.518, 0.017, 1.805],
        0x27f6: [0.518, 0.017, 1.833],
        0x27f7: [0.518, 0.017, 2.126],
        0x27f8: [0.547, 0.046, 1.868],
        0x27f9: [0.547, 0.046, 1.87],
        0x27fa: [0.547, 0.046, 2.126],
        0x27fc: [0.518, 0.017, 1.833],
        0x29f8: [0.711, 0.21, 0.894],
        0x2a2f: [0.53, 0.028, 0.894],
        0x2a3f: [0.686, 0, 0.9],
        0x2aaf: [0.696, 0.199, 0.894],
        0x2ab0: [0.697, 0.199, 0.894],
        0x3008: [0.75, 0.249, 0.447],
        0x3009: [0.75, 0.249, 0.447]
      };
      //# sourceMappingURL=bold.js.map

      /***/
    },

    /***/ 6987: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.delimiters =
        exports.VSIZES =
        exports.HDW3 =
        exports.HDW2 =
        exports.HDW1 =
          void 0;
      var FontData_js_1 = __webpack_require__(30861);
      exports.HDW1 = [0.75, 0.25, 0.875];
      exports.HDW2 = [0.85, 0.349, 0.667];
      exports.HDW3 = [0.583, 0.082, 0.5];
      exports.VSIZES = [1, 1.2, 1.8, 2.4, 3];
      var DELIM2F = { c: 0x2f, dir: FontData_js_1.V, sizes: exports.VSIZES };
      var DELIMAF = {
        c: 0xaf,
        dir: FontData_js_1.H,
        sizes: [0.5],
        stretch: [0, 0xaf],
        HDW: [0.59, -0.544, 0.5]
      };
      var DELIM2C6 = {
        c: 0x2c6,
        dir: FontData_js_1.H,
        sizes: [0.5, 0.556, 1, 1.444, 1.889]
      };
      var DELIM2DC = {
        c: 0x2dc,
        dir: FontData_js_1.H,
        sizes: [0.5, 0.556, 1, 1.444, 1.889]
      };
      var DELIM2013 = {
        c: 0x2013,
        dir: FontData_js_1.H,
        sizes: [0.5],
        stretch: [0, 0x2013],
        HDW: [0.285, -0.248, 0.5]
      };
      var DELIM2190 = {
        c: 0x2190,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0x2190, 0x2212],
        HDW: exports.HDW3
      };
      var DELIM2192 = {
        c: 0x2192,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0, 0x2212, 0x2192],
        HDW: exports.HDW3
      };
      var DELIM2194 = {
        c: 0x2194,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0x2190, 0x2212, 0x2192],
        HDW: exports.HDW3
      };
      var DELIM21A4 = {
        c: 0x21a4,
        dir: FontData_js_1.H,
        stretch: [0x2190, 0x2212, 0x2223],
        HDW: exports.HDW3,
        min: 1.278
      };
      var DELIM21A6 = {
        c: 0x21a6,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0x2223, 0x2212, 0x2192],
        HDW: exports.HDW3
      };
      var DELIM21D0 = {
        c: 0x21d0,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0x21d0, 0x3d],
        HDW: exports.HDW3
      };
      var DELIM21D2 = {
        c: 0x21d2,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0, 0x3d, 0x21d2],
        HDW: exports.HDW3
      };
      var DELIM21D4 = {
        c: 0x21d4,
        dir: FontData_js_1.H,
        sizes: [1],
        stretch: [0x21d0, 0x3d, 0x21d2],
        HDW: exports.HDW3
      };
      var DELIM2212 = {
        c: 0x2212,
        dir: FontData_js_1.H,
        sizes: [0.778],
        stretch: [0, 0x2212],
        HDW: exports.HDW3
      };
      var DELIM2223 = {
        c: 0x2223,
        dir: FontData_js_1.V,
        sizes: [1],
        stretch: [0, 0x2223],
        HDW: [0.627, 0.015, 0.333]
      };
      var DELIM23DC = {
        c: 0x23dc,
        dir: FontData_js_1.H,
        sizes: [0.778, 1],
        schar: [0x2322, 0x2322],
        variants: [5, 0],
        stretch: [0xe150, 0xe154, 0xe151],
        HDW: [0.32, 0.2, 0.5]
      };
      var DELIM23DD = {
        c: 0x23dd,
        dir: FontData_js_1.H,
        sizes: [0.778, 1],
        schar: [0x2323, 0x2323],
        variants: [5, 0],
        stretch: [0xe152, 0xe154, 0xe153],
        HDW: [0.32, 0.2, 0.5]
      };
      var DELIM23DE = {
        c: 0x23de,
        dir: FontData_js_1.H,
        stretch: [0xe150, 0xe154, 0xe151, 0xe155],
        HDW: [0.32, 0.2, 0.5],
        min: 1.8
      };
      var DELIM23DF = {
        c: 0x23df,
        dir: FontData_js_1.H,
        stretch: [0xe152, 0xe154, 0xe153, 0xe156],
        HDW: [0.32, 0.2, 0.5],
        min: 1.8
      };
      var DELIM27E8 = {
        c: 0x27e8,
        dir: FontData_js_1.V,
        sizes: exports.VSIZES
      };
      var DELIM27E9 = {
        c: 0x27e9,
        dir: FontData_js_1.V,
        sizes: exports.VSIZES
      };
      var DELIM2906 = {
        c: 0x2906,
        dir: FontData_js_1.H,
        stretch: [0x21d0, 0x3d, 0x2223],
        HDW: exports.HDW3,
        min: 1.278
      };
      var DELIM2907 = {
        c: 0x2907,
        dir: FontData_js_1.H,
        stretch: [0x22a8, 0x3d, 0x21d2],
        HDW: exports.HDW3,
        min: 1.278
      };
      exports.delimiters = {
        0x28: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x239b, 0x239c, 0x239d],
          HDW: [0.85, 0.349, 0.875]
        },
        0x29: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x239e, 0x239f, 0x23a0],
          HDW: [0.85, 0.349, 0.875]
        },
        0x2d: DELIM2212,
        0x2f: DELIM2F,
        0x3d: {
          dir: FontData_js_1.H,
          sizes: [0.778],
          stretch: [0, 0x3d],
          HDW: exports.HDW3
        },
        0x5b: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23a1, 0x23a2, 0x23a3],
          HDW: exports.HDW2
        },
        0x5c: { dir: FontData_js_1.V, sizes: exports.VSIZES },
        0x5d: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23a4, 0x23a5, 0x23a6],
          HDW: exports.HDW2
        },
        0x5e: DELIM2C6,
        0x5f: DELIM2013,
        0x7b: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23a7, 0x23aa, 0x23a9, 0x23a8],
          HDW: [0.85, 0.349, 0.889]
        },
        0x7c: {
          dir: FontData_js_1.V,
          sizes: [1],
          stretch: [0, 0x2223],
          HDW: [0.75, 0.25, 0.333]
        },
        0x7d: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23ab, 0x23aa, 0x23ad, 0x23ac],
          HDW: [0.85, 0.349, 0.889]
        },
        0x7e: DELIM2DC,
        0xaf: DELIMAF,
        0x2c6: DELIM2C6,
        0x2c9: DELIMAF,
        0x2dc: DELIM2DC,
        0x302: DELIM2C6,
        0x303: DELIM2DC,
        0x332: DELIM2013,
        0x2013: DELIM2013,
        0x2014: DELIM2013,
        0x2015: DELIM2013,
        0x2016: {
          dir: FontData_js_1.V,
          sizes: [0.602, 1],
          schar: [0, 0x2225],
          variants: [1, 0],
          stretch: [0, 0x2225],
          HDW: [0.602, 0, 0.556]
        },
        0x2017: DELIM2013,
        0x203e: DELIMAF,
        0x20d7: DELIM2192,
        0x2190: DELIM2190,
        0x2191: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0x2191, 0x23d0],
          HDW: [0.6, 0, 0.667]
        },
        0x2192: DELIM2192,
        0x2193: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0, 0x23d0, 0x2193],
          HDW: [0.6, 0, 0.667]
        },
        0x2194: DELIM2194,
        0x2195: {
          dir: FontData_js_1.V,
          sizes: [1.044],
          stretch: [0x2191, 0x23d0, 0x2193],
          HDW: exports.HDW1
        },
        0x219e: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0x219e, 0x2212],
          HDW: exports.HDW3
        },
        0x21a0: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0, 0x2212, 0x21a0],
          HDW: exports.HDW3
        },
        0x21a4: DELIM21A4,
        0x21a5: {
          dir: FontData_js_1.V,
          stretch: [0x2191, 0x23d0, 0x22a5],
          HDW: exports.HDW1,
          min: 1.555
        },
        0x21a6: DELIM21A6,
        0x21a7: {
          dir: FontData_js_1.V,
          stretch: [0x22a4, 0x23d0, 0x2193],
          HDW: exports.HDW1,
          min: 1.555
        },
        0x21b0: {
          dir: FontData_js_1.V,
          sizes: [0.722],
          stretch: [0x21b0, 0x23d0],
          HDW: exports.HDW1
        },
        0x21b1: {
          dir: FontData_js_1.V,
          sizes: [0.722],
          stretch: [0x21b1, 0x23d0],
          HDW: exports.HDW1
        },
        0x21bc: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0x21bc, 0x2212],
          HDW: exports.HDW3
        },
        0x21bd: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0x21bd, 0x2212],
          HDW: exports.HDW3
        },
        0x21be: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0x21be, 0x23d0],
          HDW: exports.HDW1
        },
        0x21bf: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0x21bf, 0x23d0],
          HDW: exports.HDW1
        },
        0x21c0: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0, 0x2212, 0x21c0],
          HDW: exports.HDW3
        },
        0x21c1: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0, 0x2212, 0x21c1],
          HDW: exports.HDW3
        },
        0x21c2: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0, 0x23d0, 0x21c2],
          HDW: exports.HDW1
        },
        0x21c3: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0, 0x23d0, 0x21c3],
          HDW: exports.HDW1
        },
        0x21d0: DELIM21D0,
        0x21d1: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0x21d1, 0x2016],
          HDW: [0.599, 0, 0.778]
        },
        0x21d2: DELIM21D2,
        0x21d3: {
          dir: FontData_js_1.V,
          sizes: [0.888],
          stretch: [0, 0x2016, 0x21d3],
          HDW: [0.6, 0, 0.778]
        },
        0x21d4: DELIM21D4,
        0x21d5: {
          dir: FontData_js_1.V,
          sizes: [1.044],
          stretch: [0x21d1, 0x2016, 0x21d3],
          HDW: [0.75, 0.25, 0.778]
        },
        0x21da: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0x21da, 0x2261],
          HDW: [0.464, -0.036, 0.5]
        },
        0x21db: {
          dir: FontData_js_1.H,
          sizes: [1],
          stretch: [0, 0x2261, 0x21db],
          HDW: [0.464, -0.036, 0.5]
        },
        0x2212: DELIM2212,
        0x2215: DELIM2F,
        0x221a: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0xe001, 0xe000, 0x23b7],
          fullExt: [0.65, 2.3],
          HDW: [0.85, 0.35, 1.056]
        },
        0x2223: DELIM2223,
        0x2225: {
          dir: FontData_js_1.V,
          sizes: [1],
          stretch: [0, 0x2225],
          HDW: [0.627, 0.015, 0.556]
        },
        0x2308: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23a1, 0x23a2],
          HDW: exports.HDW2
        },
        0x2309: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0x23a4, 0x23a5],
          HDW: exports.HDW2
        },
        0x230a: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0, 0x23a2, 0x23a3],
          HDW: exports.HDW2
        },
        0x230b: {
          dir: FontData_js_1.V,
          sizes: exports.VSIZES,
          stretch: [0, 0x23a5, 0x23a6],
          HDW: exports.HDW2
        },
        0x2312: DELIM23DC,
        0x2322: DELIM23DC,
        0x2323: DELIM23DD,
        0x2329: DELIM27E8,
        0x232a: DELIM27E9,
        0x23aa: {
          dir: FontData_js_1.V,
          sizes: [0.32],
          stretch: [0x23aa, 0x23aa, 0x23aa],
          HDW: [0.29, 0.015, 0.889]
        },
        0x23af: DELIM2013,
        0x23b0: {
          dir: FontData_js_1.V,
          sizes: [0.989],
          stretch: [0x23a7, 0x23aa, 0x23ad],
          HDW: [0.75, 0.25, 0.889]
        },
        0x23b1: {
          dir: FontData_js_1.V,
          sizes: [0.989],
          stretch: [0x23ab, 0x23aa, 0x23a9],
          HDW: [0.75, 0.25, 0.889]
        },
        0x23b4: {
          dir: FontData_js_1.H,
          stretch: [0x250c, 0x2212, 0x2510],
          HDW: exports.HDW3,
          min: 1
        },
        0x23b5: {
          dir: FontData_js_1.H,
          stretch: [0x2514, 0x2212, 0x2518],
          HDW: exports.HDW3,
          min: 1
        },
        0x23d0: {
          dir: FontData_js_1.V,
          sizes: [0.602, 1],
          schar: [0, 0x2223],
          variants: [1, 0],
          stretch: [0, 0x2223],
          HDW: [0.602, 0, 0.333]
        },
        0x23dc: DELIM23DC,
        0x23dd: DELIM23DD,
        0x23de: DELIM23DE,
        0x23df: DELIM23DF,
        0x23e0: {
          dir: FontData_js_1.H,
          stretch: [0x2ca, 0x2c9, 0x2cb],
          HDW: [0.59, -0.544, 0.5],
          min: 1
        },
        0x23e1: {
          dir: FontData_js_1.H,
          stretch: [0x2cb, 0x2c9, 0x2ca],
          HDW: [0.59, -0.544, 0.5],
          min: 1
        },
        0x2500: DELIM2013,
        0x2758: DELIM2223,
        0x27e8: DELIM27E8,
        0x27e9: DELIM27E9,
        0x27ee: {
          dir: FontData_js_1.V,
          sizes: [0.989],
          stretch: [0x23a7, 0x23aa, 0x23a9],
          HDW: [0.75, 0.25, 0.889]
        },
        0x27ef: {
          dir: FontData_js_1.V,
          sizes: [0.989],
          stretch: [0x23ab, 0x23aa, 0x23ad],
          HDW: [0.75, 0.25, 0.889]
        },
        0x27f5: DELIM2190,
        0x27f6: DELIM2192,
        0x27f7: DELIM2194,
        0x27f8: DELIM21D0,
        0x27f9: DELIM21D2,
        0x27fa: DELIM21D4,
        0x27fb: DELIM21A4,
        0x27fc: DELIM21A6,
        0x27fd: DELIM2906,
        0x27fe: DELIM2907,
        0x2906: DELIM2906,
        0x2907: DELIM2907,
        0x294e: {
          dir: FontData_js_1.H,
          stretch: [0x21bc, 0x2212, 0x21c0],
          HDW: exports.HDW3,
          min: 2
        },
        0x294f: {
          dir: FontData_js_1.V,
          stretch: [0x21be, 0x23d0, 0x21c2],
          HDW: exports.HDW1,
          min: 1.776
        },
        0x2950: {
          dir: FontData_js_1.H,
          stretch: [0x21bd, 0x2212, 0x21c1],
          HDW: exports.HDW3,
          min: 2
        },
        0x2951: {
          dir: FontData_js_1.V,
          stretch: [0x21bf, 0x23d0, 0x21c3],
          HDW: exports.HDW1,
          min: 0.5
        },
        0x295a: {
          dir: FontData_js_1.H,
          stretch: [0x21bc, 0x2212, 0x2223],
          HDW: exports.HDW3,
          min: 1.278
        },
        0x295b: {
          dir: FontData_js_1.H,
          stretch: [0x2223, 0x2212, 0x21c0],
          HDW: exports.HDW3,
          min: 1.278
        },
        0x295c: {
          dir: FontData_js_1.V,
          stretch: [0x21be, 0x23d0, 0x22a5],
          HDW: exports.HDW1,
          min: 1.556
        },
        0x295d: {
          dir: FontData_js_1.V,
          stretch: [0x22a4, 0x23d0, 0x21c2],
          HDW: exports.HDW1,
          min: 1.556
        },
        0x295e: {
          dir: FontData_js_1.H,
          stretch: [0x21bd, 0x2212, 0x2223],
          HDW: exports.HDW3,
          min: 1.278
        },
        0x295f: {
          dir: FontData_js_1.H,
          stretch: [0x2223, 0x2212, 0x21c1],
          HDW: exports.HDW3,
          min: 1.278
        },
        0x2960: {
          dir: FontData_js_1.V,
          stretch: [0x21bf, 0x23d0, 0x22a5],
          HDW: exports.HDW1,
          min: 1.776
        },
        0x2961: {
          dir: FontData_js_1.V,
          stretch: [0x22a4, 0x23d0, 0x21c3],
          HDW: exports.HDW1,
          min: 1.776
        },
        0x3008: DELIM27E8,
        0x3009: DELIM27E9,
        0xfe37: DELIM23DE,
        0xfe38: DELIM23DF
      };
      //# sourceMappingURL=delimiters.js.map

      /***/
    },

    /***/ 32249: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.doubleStruck = void 0;
      exports.doubleStruck = {};
      //# sourceMappingURL=double-struck.js.map

      /***/
    },

    /***/ 45600: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.frakturBold = void 0;
      exports.frakturBold = {
        0x21: [0.689, 0.012, 0.349],
        0x22: [0.695, -0.432, 0.254],
        0x26: [0.696, 0.016, 0.871],
        0x27: [0.695, -0.436, 0.25],
        0x28: [0.737, 0.186, 0.459],
        0x29: [0.735, 0.187, 0.459],
        0x2a: [0.692, -0.449, 0.328],
        0x2b: [0.598, 0.082, 0.893],
        0x2c: [0.107, 0.191, 0.328],
        0x2d: [0.275, -0.236, 0.893],
        0x2e: [0.102, 0.015, 0.328],
        0x2f: [0.721, 0.182, 0.593],
        0x30: [0.501, 0.012, 0.593],
        0x31: [0.489, 0, 0.593],
        0x32: [0.491, 0, 0.593],
        0x33: [0.487, 0.193, 0.593],
        0x34: [0.495, 0.196, 0.593],
        0x35: [0.481, 0.19, 0.593],
        0x36: [0.704, 0.012, 0.593],
        0x37: [0.479, 0.197, 0.593],
        0x38: [0.714, 0.005, 0.593],
        0x39: [0.487, 0.195, 0.593],
        0x3a: [0.457, 0.012, 0.255],
        0x3b: [0.458, 0.19, 0.255],
        0x3d: [0.343, -0.168, 0.582],
        0x3f: [0.697, 0.014, 0.428],
        0x5b: [0.74, 0.13, 0.257],
        0x5d: [0.738, 0.132, 0.257],
        0x5e: [0.734, -0.452, 0.59],
        0x2018: [0.708, -0.411, 0.254],
        0x2019: [0.692, -0.394, 0.254],
        0x2044: [0.721, 0.182, 0.593],
        0xe301: [0.63, 0.027, 0.587],
        0xe302: [0.693, 0.212, 0.394, { ic: 0.014 }],
        0xe303: [0.681, 0.219, 0.387],
        0xe304: [0.473, 0.212, 0.593],
        0xe305: [0.684, 0.027, 0.393],
        0xe308: [0.679, 0.22, 0.981],
        0xe309: [0.717, 0.137, 0.727]
      };
      //# sourceMappingURL=fraktur-bold.js.map

      /***/
    },

    /***/ 59534: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.fraktur = void 0;
      exports.fraktur = {
        0x21: [0.689, 0.012, 0.296],
        0x22: [0.695, -0.432, 0.215],
        0x26: [0.698, 0.011, 0.738],
        0x27: [0.695, -0.436, 0.212],
        0x28: [0.737, 0.186, 0.389],
        0x29: [0.735, 0.187, 0.389],
        0x2a: [0.692, -0.449, 0.278],
        0x2b: [0.598, 0.082, 0.756],
        0x2c: [0.107, 0.191, 0.278],
        0x2d: [0.275, -0.236, 0.756],
        0x2e: [0.102, 0.015, 0.278],
        0x2f: [0.721, 0.182, 0.502],
        0x30: [0.492, 0.013, 0.502],
        0x31: [0.468, 0, 0.502],
        0x32: [0.474, 0, 0.502],
        0x33: [0.473, 0.182, 0.502],
        0x34: [0.476, 0.191, 0.502],
        0x35: [0.458, 0.184, 0.502],
        0x36: [0.7, 0.013, 0.502],
        0x37: [0.468, 0.181, 0.502],
        0x38: [0.705, 0.01, 0.502],
        0x39: [0.469, 0.182, 0.502],
        0x3a: [0.457, 0.012, 0.216],
        0x3b: [0.458, 0.189, 0.216],
        0x3d: [0.368, -0.132, 0.756],
        0x3f: [0.693, 0.011, 0.362],
        0x5b: [0.74, 0.13, 0.278],
        0x5d: [0.738, 0.131, 0.278],
        0x5e: [0.734, -0.452, 0.5],
        0x2018: [0.708, -0.41, 0.215],
        0x2019: [0.692, -0.395, 0.215],
        0x2044: [0.721, 0.182, 0.502],
        0xe300: [0.683, 0.032, 0.497],
        0xe301: [0.616, 0.03, 0.498],
        0xe302: [0.68, 0.215, 0.333],
        0xe303: [0.679, 0.224, 0.329],
        0xe304: [0.471, 0.214, 0.503],
        0xe305: [0.686, 0.02, 0.333],
        0xe306: [0.577, 0.021, 0.334, { ic: 0.013 }],
        0xe307: [0.475, 0.022, 0.501, { ic: 0.013 }]
      };
      //# sourceMappingURL=fraktur.js.map

      /***/
    },

    /***/ 14141: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.italic = void 0;
      exports.italic = {
        0x21: [0.716, 0, 0.307, { ic: 0.073 }],
        0x22: [0.694, -0.379, 0.514, { ic: 0.024 }],
        0x23: [0.694, 0.194, 0.818, { ic: 0.01 }],
        0x25: [0.75, 0.056, 0.818, { ic: 0.029 }],
        0x26: [0.716, 0.022, 0.767, { ic: 0.035 }],
        0x27: [0.694, -0.379, 0.307, { ic: 0.07 }],
        0x28: [0.75, 0.25, 0.409, { ic: 0.108 }],
        0x29: [0.75, 0.25, 0.409],
        0x2a: [0.75, -0.32, 0.511, { ic: 0.073 }],
        0x2b: [0.557, 0.057, 0.767],
        0x2c: [0.121, 0.194, 0.307],
        0x2d: [0.251, -0.18, 0.358],
        0x2e: [0.121, 0, 0.307],
        0x2f: [0.716, 0.215, 0.778],
        0x30: [0.665, 0.021, 0.511, { ic: 0.051 }],
        0x31: [0.666, 0, 0.511],
        0x32: [0.666, 0.022, 0.511, { ic: 0.04 }],
        0x33: [0.666, 0.022, 0.511, { ic: 0.051 }],
        0x34: [0.666, 0.194, 0.511],
        0x35: [0.666, 0.022, 0.511, { ic: 0.056 }],
        0x36: [0.665, 0.022, 0.511, { ic: 0.054 }],
        0x37: [0.666, 0.022, 0.511, { ic: 0.123 }],
        0x38: [0.666, 0.021, 0.511, { ic: 0.042 }],
        0x39: [0.666, 0.022, 0.511, { ic: 0.042 }],
        0x3a: [0.431, 0, 0.307],
        0x3b: [0.431, 0.194, 0.307],
        0x3d: [0.367, -0.133, 0.767],
        0x3f: [0.716, 0, 0.511, { ic: 0.04 }],
        0x40: [0.705, 0.011, 0.767, { ic: 0.022 }],
        0x5b: [0.75, 0.25, 0.307, { ic: 0.139 }],
        0x5d: [0.75, 0.25, 0.307, { ic: 0.052 }],
        0x5e: [0.694, -0.527, 0.511, { ic: 0.017 }],
        0x5f: [-0.025, 0.062, 0.511, { ic: 0.043 }],
        0x7e: [0.318, -0.208, 0.511, { ic: 0.06 }],
        0x131: [0.441, 0.01, 0.307, { ic: 0.033 }],
        0x237: [0.442, 0.204, 0.332],
        0x300: [0.697, -0.5, 0],
        0x301: [0.697, -0.5, 0, { ic: 0.039 }],
        0x302: [0.694, -0.527, 0, { ic: 0.017 }],
        0x303: [0.668, -0.558, 0, { ic: 0.06 }],
        0x304: [0.589, -0.544, 0, { ic: 0.054 }],
        0x306: [0.694, -0.515, 0, { ic: 0.062 }],
        0x307: [0.669, -0.548, 0],
        0x308: [0.669, -0.554, 0, { ic: 0.045 }],
        0x30a: [0.716, -0.542, 0],
        0x30b: [0.697, -0.503, 0, { ic: 0.065 }],
        0x30c: [0.638, -0.502, 0, { ic: 0.029 }],
        0x3dd: [0.605, 0.085, 0.778],
        0x2013: [0.285, -0.248, 0.511, { ic: 0.043 }],
        0x2014: [0.285, -0.248, 1.022, { ic: 0.016 }],
        0x2015: [0.285, -0.248, 1.022, { ic: 0.016 }],
        0x2017: [-0.025, 0.062, 0.511, { ic: 0.043 }],
        0x2018: [0.694, -0.379, 0.307, { ic: 0.055 }],
        0x2019: [0.694, -0.379, 0.307, { ic: 0.07 }],
        0x201c: [0.694, -0.379, 0.514, { ic: 0.092 }],
        0x201d: [0.694, -0.379, 0.514, { ic: 0.024 }],
        0x2044: [0.716, 0.215, 0.778],
        0x210f: [0.695, 0.013, 0.54, { ic: 0.022 }],
        0x2206: [0.716, 0, 0.833, { sk: 0.167 }],
        0x29f8: [0.716, 0.215, 0.778]
      };
      //# sourceMappingURL=italic.js.map

      /***/
    },

    /***/ 63969: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.largeop = void 0;
      exports.largeop = {
        0x28: [1.15, 0.649, 0.597],
        0x29: [1.15, 0.649, 0.597],
        0x2f: [1.15, 0.649, 0.811],
        0x5b: [1.15, 0.649, 0.472],
        0x5c: [1.15, 0.649, 0.811],
        0x5d: [1.15, 0.649, 0.472],
        0x7b: [1.15, 0.649, 0.667],
        0x7d: [1.15, 0.649, 0.667],
        0x2c6: [0.772, -0.565, 1],
        0x2dc: [0.75, -0.611, 1],
        0x302: [0.772, -0.565, 0],
        0x303: [0.75, -0.611, 0],
        0x2016: [0.602, 0, 0.778],
        0x2044: [1.15, 0.649, 0.811],
        0x2191: [0.6, 0, 0.667],
        0x2193: [0.6, 0, 0.667],
        0x21d1: [0.599, 0, 0.778],
        0x21d3: [0.6, 0, 0.778],
        0x220f: [0.95, 0.45, 1.278],
        0x2210: [0.95, 0.45, 1.278],
        0x2211: [0.95, 0.45, 1.444],
        0x221a: [1.15, 0.65, 1, { ic: 0.02 }],
        0x2223: [0.627, 0.015, 0.333],
        0x2225: [0.627, 0.015, 0.556],
        0x222b: [1.36, 0.862, 0.556, { ic: 0.388 }],
        0x222c: [1.36, 0.862, 1.084, { ic: 0.388 }],
        0x222d: [1.36, 0.862, 1.592, { ic: 0.388 }],
        0x222e: [1.36, 0.862, 0.556, { ic: 0.388 }],
        0x22c0: [0.95, 0.45, 1.111],
        0x22c1: [0.95, 0.45, 1.111],
        0x22c2: [0.949, 0.45, 1.111],
        0x22c3: [0.95, 0.449, 1.111],
        0x2308: [1.15, 0.649, 0.528],
        0x2309: [1.15, 0.649, 0.528],
        0x230a: [1.15, 0.649, 0.528],
        0x230b: [1.15, 0.649, 0.528],
        0x2329: [1.15, 0.649, 0.611],
        0x232a: [1.15, 0.649, 0.611],
        0x23d0: [0.602, 0, 0.667],
        0x2758: [0.627, 0.015, 0.333],
        0x27e8: [1.15, 0.649, 0.611],
        0x27e9: [1.15, 0.649, 0.611],
        0x2a00: [0.949, 0.449, 1.511],
        0x2a01: [0.949, 0.449, 1.511],
        0x2a02: [0.949, 0.449, 1.511],
        0x2a04: [0.95, 0.449, 1.111],
        0x2a06: [0.95, 0.45, 1.111],
        0x2a0c: [1.36, 0.862, 2.168, { ic: 0.388 }],
        0x3008: [1.15, 0.649, 0.611],
        0x3009: [1.15, 0.649, 0.611]
      };
      //# sourceMappingURL=largeop.js.map

      /***/
    },

    /***/ 58626: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.monospace = void 0;
      exports.monospace = {
        0x20: [0, 0, 0.525],
        0x21: [0.622, 0, 0.525],
        0x22: [0.623, -0.333, 0.525],
        0x23: [0.611, 0, 0.525],
        0x24: [0.694, 0.082, 0.525],
        0x25: [0.694, 0.083, 0.525],
        0x26: [0.622, 0.011, 0.525],
        0x27: [0.611, -0.287, 0.525],
        0x28: [0.694, 0.082, 0.525],
        0x29: [0.694, 0.082, 0.525],
        0x2a: [0.52, -0.09, 0.525],
        0x2b: [0.531, -0.081, 0.525],
        0x2c: [0.14, 0.139, 0.525],
        0x2d: [0.341, -0.271, 0.525],
        0x2e: [0.14, 0, 0.525],
        0x2f: [0.694, 0.083, 0.525],
        0x3a: [0.431, 0, 0.525],
        0x3b: [0.431, 0.139, 0.525],
        0x3c: [0.557, -0.055, 0.525],
        0x3d: [0.417, -0.195, 0.525],
        0x3e: [0.557, -0.055, 0.525],
        0x3f: [0.617, 0, 0.525],
        0x40: [0.617, 0.006, 0.525],
        0x5b: [0.694, 0.082, 0.525],
        0x5c: [0.694, 0.083, 0.525],
        0x5d: [0.694, 0.082, 0.525],
        0x5e: [0.611, -0.46, 0.525],
        0x5f: [-0.025, 0.095, 0.525],
        0x60: [0.681, -0.357, 0.525],
        0x7b: [0.694, 0.083, 0.525],
        0x7c: [0.694, 0.082, 0.525],
        0x7d: [0.694, 0.083, 0.525],
        0x7e: [0.611, -0.466, 0.525],
        0x7f: [0.612, -0.519, 0.525],
        0xa0: [0, 0, 0.525],
        0x131: [0.431, 0, 0.525],
        0x237: [0.431, 0.228, 0.525],
        0x2b9: [0.623, -0.334, 0.525],
        0x300: [0.611, -0.485, 0],
        0x301: [0.611, -0.485, 0],
        0x302: [0.611, -0.46, 0],
        0x303: [0.611, -0.466, 0],
        0x304: [0.577, -0.5, 0],
        0x306: [0.611, -0.504, 0],
        0x308: [0.612, -0.519, 0],
        0x30a: [0.619, -0.499, 0],
        0x30c: [0.577, -0.449, 0],
        0x391: [0.623, 0, 0.525],
        0x392: [0.611, 0, 0.525],
        0x393: [0.611, 0, 0.525],
        0x394: [0.623, 0, 0.525],
        0x395: [0.611, 0, 0.525],
        0x396: [0.611, 0, 0.525],
        0x397: [0.611, 0, 0.525],
        0x398: [0.621, 0.01, 0.525],
        0x399: [0.611, 0, 0.525],
        0x39a: [0.611, 0, 0.525],
        0x39b: [0.623, 0, 0.525],
        0x39c: [0.611, 0, 0.525],
        0x39d: [0.611, 0, 0.525],
        0x39e: [0.611, 0, 0.525],
        0x39f: [0.621, 0.01, 0.525],
        0x3a0: [0.611, 0, 0.525],
        0x3a1: [0.611, 0, 0.525],
        0x3a3: [0.611, 0, 0.525],
        0x3a4: [0.611, 0, 0.525],
        0x3a5: [0.622, 0, 0.525],
        0x3a6: [0.611, 0, 0.525],
        0x3a7: [0.611, 0, 0.525],
        0x3a8: [0.611, 0, 0.525],
        0x3a9: [0.622, 0, 0.525],
        0x2017: [-0.025, 0.095, 0.525],
        0x2032: [0.623, -0.334, 0.525],
        0x2033: [0.623, 0, 1.05],
        0x2034: [0.623, 0, 1.575],
        0x2044: [0.694, 0.083, 0.525],
        0x2057: [0.623, 0, 2.1],
        0x2206: [0.623, 0, 0.525]
      };
      //# sourceMappingURL=monospace.js.map

      /***/
    },

    /***/ 25190: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.normal = void 0;
      exports.normal = {
        0x20: [0, 0, 0.25],
        0x21: [0.716, 0, 0.278],
        0x22: [0.694, -0.379, 0.5],
        0x23: [0.694, 0.194, 0.833],
        0x24: [0.75, 0.056, 0.5],
        0x25: [0.75, 0.056, 0.833],
        0x26: [0.716, 0.022, 0.778],
        0x27: [0.694, -0.379, 0.278],
        0x28: [0.75, 0.25, 0.389],
        0x29: [0.75, 0.25, 0.389],
        0x2a: [0.75, -0.32, 0.5],
        0x2b: [0.583, 0.082, 0.778],
        0x2c: [0.121, 0.194, 0.278],
        0x2d: [0.252, -0.179, 0.333],
        0x2e: [0.12, 0, 0.278],
        0x2f: [0.75, 0.25, 0.5],
        0x30: [0.666, 0.022, 0.5],
        0x31: [0.666, 0, 0.5],
        0x32: [0.666, 0, 0.5],
        0x33: [0.665, 0.022, 0.5],
        0x34: [0.677, 0, 0.5],
        0x35: [0.666, 0.022, 0.5],
        0x36: [0.666, 0.022, 0.5],
        0x37: [0.676, 0.022, 0.5],
        0x38: [0.666, 0.022, 0.5],
        0x39: [0.666, 0.022, 0.5],
        0x3a: [0.43, 0, 0.278],
        0x3b: [0.43, 0.194, 0.278],
        0x3c: [0.54, 0.04, 0.778],
        0x3d: [0.583, 0.082, 0.778],
        0x3e: [0.54, 0.04, 0.778],
        0x3f: [0.705, 0, 0.472],
        0x40: [0.705, 0.011, 0.778],
        0x41: [0.716, 0, 0.75],
        0x42: [0.683, 0, 0.708],
        0x43: [0.705, 0.021, 0.722],
        0x44: [0.683, 0, 0.764],
        0x45: [0.68, 0, 0.681],
        0x46: [0.68, 0, 0.653],
        0x47: [0.705, 0.022, 0.785],
        0x48: [0.683, 0, 0.75],
        0x49: [0.683, 0, 0.361],
        0x4a: [0.683, 0.022, 0.514],
        0x4b: [0.683, 0, 0.778],
        0x4c: [0.683, 0, 0.625],
        0x4d: [0.683, 0, 0.917],
        0x4e: [0.683, 0, 0.75],
        0x4f: [0.705, 0.022, 0.778],
        0x50: [0.683, 0, 0.681],
        0x51: [0.705, 0.193, 0.778],
        0x52: [0.683, 0.022, 0.736],
        0x53: [0.705, 0.022, 0.556],
        0x54: [0.677, 0, 0.722],
        0x55: [0.683, 0.022, 0.75],
        0x56: [0.683, 0.022, 0.75],
        0x57: [0.683, 0.022, 1.028],
        0x58: [0.683, 0, 0.75],
        0x59: [0.683, 0, 0.75],
        0x5a: [0.683, 0, 0.611],
        0x5b: [0.75, 0.25, 0.278],
        0x5c: [0.75, 0.25, 0.5],
        0x5d: [0.75, 0.25, 0.278],
        0x5e: [0.694, -0.531, 0.5],
        0x5f: [-0.025, 0.062, 0.5],
        0x60: [0.699, -0.505, 0.5],
        0x61: [0.448, 0.011, 0.5],
        0x62: [0.694, 0.011, 0.556],
        0x63: [0.448, 0.011, 0.444],
        0x64: [0.694, 0.011, 0.556],
        0x65: [0.448, 0.011, 0.444],
        0x66: [0.705, 0, 0.306, { ic: 0.066 }],
        0x67: [0.453, 0.206, 0.5],
        0x68: [0.694, 0, 0.556],
        0x69: [0.669, 0, 0.278],
        0x6a: [0.669, 0.205, 0.306],
        0x6b: [0.694, 0, 0.528],
        0x6c: [0.694, 0, 0.278],
        0x6d: [0.442, 0, 0.833],
        0x6e: [0.442, 0, 0.556],
        0x6f: [0.448, 0.01, 0.5],
        0x70: [0.442, 0.194, 0.556],
        0x71: [0.442, 0.194, 0.528],
        0x72: [0.442, 0, 0.392],
        0x73: [0.448, 0.011, 0.394],
        0x74: [0.615, 0.01, 0.389],
        0x75: [0.442, 0.011, 0.556],
        0x76: [0.431, 0.011, 0.528],
        0x77: [0.431, 0.011, 0.722],
        0x78: [0.431, 0, 0.528],
        0x79: [0.431, 0.204, 0.528],
        0x7a: [0.431, 0, 0.444],
        0x7b: [0.75, 0.25, 0.5],
        0x7c: [0.75, 0.249, 0.278],
        0x7d: [0.75, 0.25, 0.5],
        0x7e: [0.318, -0.215, 0.5],
        0xa0: [0, 0, 0.25],
        0xa3: [0.714, 0.011, 0.769],
        0xa5: [0.683, 0, 0.75],
        0xa8: [0.669, -0.554, 0.5],
        0xac: [0.356, -0.089, 0.667],
        0xae: [0.709, 0.175, 0.947],
        0xaf: [0.59, -0.544, 0.5],
        0xb0: [0.715, -0.542, 0.5],
        0xb1: [0.666, 0, 0.778],
        0xb4: [0.699, -0.505, 0.5],
        0xb7: [0.31, -0.19, 0.278],
        0xd7: [0.491, -0.009, 0.778],
        0xf0: [0.749, 0.021, 0.556],
        0xf7: [0.537, 0.036, 0.778],
        0x131: [0.442, 0, 0.278, { sk: 0.0278 }],
        0x237: [0.442, 0.205, 0.306, { sk: 0.0833 }],
        0x2b9: [0.56, -0.043, 0.275],
        0x2c6: [0.694, -0.531, 0.5],
        0x2c7: [0.644, -0.513, 0.5],
        0x2c9: [0.59, -0.544, 0.5],
        0x2ca: [0.699, -0.505, 0.5],
        0x2cb: [0.699, -0.505, 0.5],
        0x2d8: [0.694, -0.515, 0.5],
        0x2d9: [0.669, -0.549, 0.5],
        0x2da: [0.715, -0.542, 0.5],
        0x2dc: [0.668, -0.565, 0.5],
        0x300: [0.699, -0.505, 0],
        0x301: [0.699, -0.505, 0],
        0x302: [0.694, -0.531, 0],
        0x303: [0.668, -0.565, 0],
        0x304: [0.59, -0.544, 0],
        0x306: [0.694, -0.515, 0],
        0x307: [0.669, -0.549, 0],
        0x308: [0.669, -0.554, 0],
        0x30a: [0.715, -0.542, 0],
        0x30b: [0.701, -0.51, 0],
        0x30c: [0.644, -0.513, 0],
        0x338: [0.716, 0.215, 0],
        0x391: [0.716, 0, 0.75],
        0x392: [0.683, 0, 0.708],
        0x393: [0.68, 0, 0.625],
        0x394: [0.716, 0, 0.833],
        0x395: [0.68, 0, 0.681],
        0x396: [0.683, 0, 0.611],
        0x397: [0.683, 0, 0.75],
        0x398: [0.705, 0.022, 0.778],
        0x399: [0.683, 0, 0.361],
        0x39a: [0.683, 0, 0.778],
        0x39b: [0.716, 0, 0.694],
        0x39c: [0.683, 0, 0.917],
        0x39d: [0.683, 0, 0.75],
        0x39e: [0.677, 0, 0.667],
        0x39f: [0.705, 0.022, 0.778],
        0x3a0: [0.68, 0, 0.75],
        0x3a1: [0.683, 0, 0.681],
        0x3a3: [0.683, 0, 0.722],
        0x3a4: [0.677, 0, 0.722],
        0x3a5: [0.705, 0, 0.778],
        0x3a6: [0.683, 0, 0.722],
        0x3a7: [0.683, 0, 0.75],
        0x3a8: [0.683, 0, 0.778],
        0x3a9: [0.704, 0, 0.722],
        0x2000: [0, 0, 0.5],
        0x2001: [0, 0, 1],
        0x2002: [0, 0, 0.5],
        0x2003: [0, 0, 1],
        0x2004: [0, 0, 0.333],
        0x2005: [0, 0, 0.25],
        0x2006: [0, 0, 0.167],
        0x2009: [0, 0, 0.167],
        0x200a: [0, 0, 0.1],
        0x200b: [0, 0, 0],
        0x200c: [0, 0, 0],
        0x2013: [0.285, -0.248, 0.5],
        0x2014: [0.285, -0.248, 1],
        0x2015: [0.285, -0.248, 1],
        0x2016: [0.75, 0.25, 0.5],
        0x2017: [-0.025, 0.062, 0.5],
        0x2018: [0.694, -0.379, 0.278],
        0x2019: [0.694, -0.379, 0.278],
        0x201c: [0.694, -0.379, 0.5],
        0x201d: [0.694, -0.379, 0.5],
        0x2020: [0.705, 0.216, 0.444],
        0x2021: [0.705, 0.205, 0.444],
        0x2022: [0.444, -0.055, 0.5],
        0x2026: [0.12, 0, 1.172],
        0x2032: [0.56, -0.043, 0.275],
        0x2033: [0.56, 0, 0.55],
        0x2034: [0.56, 0, 0.825],
        0x2035: [0.56, -0.043, 0.275],
        0x2036: [0.56, 0, 0.55],
        0x2037: [0.56, 0, 0.825],
        0x203e: [0.59, -0.544, 0.5],
        0x2044: [0.75, 0.25, 0.5],
        0x2057: [0.56, 0, 1.1],
        0x2060: [0, 0, 0],
        0x2061: [0, 0, 0],
        0x2062: [0, 0, 0],
        0x2063: [0, 0, 0],
        0x2064: [0, 0, 0],
        0x20d7: [0.714, -0.516, 0.5],
        0x2102: [0.702, 0.019, 0.722],
        0x210b: [0.717, 0.036, 0.969, { ic: 0.272, sk: 0.333 }],
        0x210c: [0.666, 0.133, 0.72],
        0x210d: [0.683, 0, 0.778],
        0x210e: [0.694, 0.011, 0.576, { sk: -0.0278 }],
        0x210f: [0.695, 0.013, 0.54, { ic: 0.022 }],
        0x2110: [0.717, 0.017, 0.809, { ic: 0.137, sk: 0.333 }],
        0x2111: [0.686, 0.026, 0.554],
        0x2112: [0.717, 0.017, 0.874, { ic: 0.161, sk: 0.306 }],
        0x2113: [0.705, 0.02, 0.417, { sk: 0.111 }],
        0x2115: [0.683, 0.02, 0.722],
        0x2118: [0.453, 0.216, 0.636, { sk: 0.111 }],
        0x2119: [0.683, 0, 0.611],
        0x211a: [0.701, 0.181, 0.778],
        0x211b: [0.717, 0.017, 0.85, { ic: 0.037, sk: 0.194 }],
        0x211c: [0.686, 0.026, 0.828],
        0x211d: [0.683, 0, 0.722],
        0x2124: [0.683, 0, 0.667],
        0x2126: [0.704, 0, 0.722],
        0x2127: [0.684, 0.022, 0.722],
        0x2128: [0.729, 0.139, 0.602],
        0x212c: [0.708, 0.028, 0.908, { ic: 0.02, sk: 0.194 }],
        0x212d: [0.685, 0.024, 0.613],
        0x2130: [0.707, 0.008, 0.562, { ic: 0.156, sk: 0.139 }],
        0x2131: [0.735, 0.036, 0.895, { ic: 0.095, sk: 0.222 }],
        0x2132: [0.695, 0, 0.556],
        0x2133: [0.721, 0.05, 1.08, { ic: 0.136, sk: 0.444 }],
        0x2135: [0.694, 0, 0.611],
        0x2136: [0.763, 0.021, 0.667, { ic: 0.02 }],
        0x2137: [0.764, 0.043, 0.444],
        0x2138: [0.764, 0.043, 0.667],
        0x2141: [0.705, 0.023, 0.639],
        0x2190: [0.511, 0.011, 1],
        0x2191: [0.694, 0.193, 0.5],
        0x2192: [0.511, 0.011, 1],
        0x2193: [0.694, 0.194, 0.5],
        0x2194: [0.511, 0.011, 1],
        0x2195: [0.772, 0.272, 0.5],
        0x2196: [0.72, 0.195, 1],
        0x2197: [0.72, 0.195, 1],
        0x2198: [0.695, 0.22, 1],
        0x2199: [0.695, 0.22, 1],
        0x219a: [0.437, -0.06, 1],
        0x219b: [0.437, -0.06, 1],
        0x219e: [0.417, -0.083, 1],
        0x21a0: [0.417, -0.083, 1],
        0x21a2: [0.417, -0.083, 1.111],
        0x21a3: [0.417, -0.083, 1.111],
        0x21a6: [0.511, 0.011, 1],
        0x21a9: [0.511, 0.011, 1.126],
        0x21aa: [0.511, 0.011, 1.126],
        0x21ab: [0.575, 0.041, 1],
        0x21ac: [0.575, 0.041, 1],
        0x21ad: [0.417, -0.083, 1.389],
        0x21ae: [0.437, -0.06, 1],
        0x21b0: [0.722, 0, 0.5],
        0x21b1: [0.722, 0, 0.5],
        0x21b6: [0.461, 0, 1],
        0x21b7: [0.46, 0, 1],
        0x21ba: [0.65, 0.083, 0.778],
        0x21bb: [0.65, 0.083, 0.778],
        0x21bc: [0.511, -0.23, 1],
        0x21bd: [0.27, 0.011, 1],
        0x21be: [0.694, 0.194, 0.417],
        0x21bf: [0.694, 0.194, 0.417],
        0x21c0: [0.511, -0.23, 1],
        0x21c1: [0.27, 0.011, 1],
        0x21c2: [0.694, 0.194, 0.417],
        0x21c3: [0.694, 0.194, 0.417],
        0x21c4: [0.667, 0, 1],
        0x21c6: [0.667, 0, 1],
        0x21c7: [0.583, 0.083, 1],
        0x21c8: [0.694, 0.193, 0.833],
        0x21c9: [0.583, 0.083, 1],
        0x21ca: [0.694, 0.194, 0.833],
        0x21cb: [0.514, 0.014, 1],
        0x21cc: [0.671, 0.011, 1],
        0x21cd: [0.534, 0.035, 1],
        0x21ce: [0.534, 0.037, 1],
        0x21cf: [0.534, 0.035, 1],
        0x21d0: [0.525, 0.024, 1],
        0x21d1: [0.694, 0.194, 0.611],
        0x21d2: [0.525, 0.024, 1],
        0x21d3: [0.694, 0.194, 0.611],
        0x21d4: [0.526, 0.025, 1],
        0x21d5: [0.772, 0.272, 0.611],
        0x21da: [0.611, 0.111, 1],
        0x21db: [0.611, 0.111, 1],
        0x21dd: [0.417, -0.083, 1],
        0x21e0: [0.437, -0.064, 1.334],
        0x21e2: [0.437, -0.064, 1.334],
        0x2200: [0.694, 0.022, 0.556],
        0x2201: [0.846, 0.021, 0.5],
        0x2202: [0.715, 0.022, 0.531, { ic: 0.035, sk: 0.0833 }],
        0x2203: [0.694, 0, 0.556],
        0x2204: [0.716, 0.215, 0.556],
        0x2205: [0.772, 0.078, 0.5],
        0x2206: [0.716, 0, 0.833],
        0x2207: [0.683, 0.033, 0.833],
        0x2208: [0.54, 0.04, 0.667],
        0x2209: [0.716, 0.215, 0.667],
        0x220b: [0.54, 0.04, 0.667],
        0x220c: [0.716, 0.215, 0.667],
        0x220d: [0.44, 0, 0.429, { ic: 0.027 }],
        0x220f: [0.75, 0.25, 0.944],
        0x2210: [0.75, 0.25, 0.944],
        0x2211: [0.75, 0.25, 1.056],
        0x2212: [0.583, 0.082, 0.778],
        0x2213: [0.5, 0.166, 0.778],
        0x2214: [0.766, 0.093, 0.778],
        0x2215: [0.75, 0.25, 0.5],
        0x2216: [0.75, 0.25, 0.5],
        0x2217: [0.465, -0.035, 0.5],
        0x2218: [0.444, -0.055, 0.5],
        0x2219: [0.444, -0.055, 0.5],
        0x221a: [0.8, 0.2, 0.833, { ic: 0.02 }],
        0x221d: [0.442, 0.011, 0.778],
        0x221e: [0.442, 0.011, 1],
        0x2220: [0.694, 0, 0.722],
        0x2221: [0.714, 0.02, 0.722],
        0x2222: [0.551, 0.051, 0.722],
        0x2223: [0.75, 0.249, 0.278],
        0x2224: [0.75, 0.252, 0.278, { ic: 0.019 }],
        0x2225: [0.75, 0.25, 0.5],
        0x2226: [0.75, 0.25, 0.5, { ic: 0.018 }],
        0x2227: [0.598, 0.022, 0.667],
        0x2228: [0.598, 0.022, 0.667],
        0x2229: [0.598, 0.022, 0.667],
        0x222a: [0.598, 0.022, 0.667],
        0x222b: [0.716, 0.216, 0.417, { ic: 0.055 }],
        0x222c: [0.805, 0.306, 0.819, { ic: 0.138 }],
        0x222d: [0.805, 0.306, 1.166, { ic: 0.138 }],
        0x222e: [0.805, 0.306, 0.472, { ic: 0.138 }],
        0x2234: [0.471, 0.082, 0.667],
        0x2235: [0.471, 0.082, 0.667],
        0x223c: [0.367, -0.133, 0.778],
        0x223d: [0.367, -0.133, 0.778],
        0x2240: [0.583, 0.083, 0.278],
        0x2241: [0.467, -0.032, 0.778],
        0x2242: [0.463, -0.034, 0.778],
        0x2243: [0.464, -0.036, 0.778],
        0x2244: [0.716, 0.215, 0.778],
        0x2245: [0.589, -0.022, 0.778],
        0x2247: [0.652, 0.155, 0.778],
        0x2248: [0.483, -0.055, 0.778],
        0x2249: [0.716, 0.215, 0.778],
        0x224a: [0.579, 0.039, 0.778],
        0x224d: [0.484, -0.016, 0.778],
        0x224e: [0.492, -0.008, 0.778],
        0x224f: [0.492, -0.133, 0.778],
        0x2250: [0.67, -0.133, 0.778],
        0x2251: [0.609, 0.108, 0.778],
        0x2252: [0.601, 0.101, 0.778],
        0x2253: [0.601, 0.102, 0.778],
        0x2256: [0.367, -0.133, 0.778],
        0x2257: [0.721, -0.133, 0.778],
        0x225c: [0.859, -0.133, 0.778],
        0x2260: [0.716, 0.215, 0.778],
        0x2261: [0.464, -0.036, 0.778],
        0x2262: [0.716, 0.215, 0.778],
        0x2264: [0.636, 0.138, 0.778],
        0x2265: [0.636, 0.138, 0.778],
        0x2266: [0.753, 0.175, 0.778],
        0x2267: [0.753, 0.175, 0.778],
        0x2268: [0.752, 0.286, 0.778],
        0x2269: [0.752, 0.286, 0.778],
        0x226a: [0.568, 0.067, 1],
        0x226b: [0.567, 0.067, 1],
        0x226c: [0.75, 0.25, 0.5],
        0x226d: [0.716, 0.215, 0.778],
        0x226e: [0.708, 0.209, 0.778],
        0x226f: [0.708, 0.209, 0.778],
        0x2270: [0.801, 0.303, 0.778],
        0x2271: [0.801, 0.303, 0.778],
        0x2272: [0.732, 0.228, 0.778],
        0x2273: [0.732, 0.228, 0.778],
        0x2274: [0.732, 0.228, 0.778],
        0x2275: [0.732, 0.228, 0.778],
        0x2276: [0.681, 0.253, 0.778],
        0x2277: [0.681, 0.253, 0.778],
        0x2278: [0.716, 0.253, 0.778],
        0x2279: [0.716, 0.253, 0.778],
        0x227a: [0.539, 0.041, 0.778],
        0x227b: [0.539, 0.041, 0.778],
        0x227c: [0.58, 0.153, 0.778],
        0x227d: [0.58, 0.154, 0.778],
        0x227e: [0.732, 0.228, 0.778],
        0x227f: [0.732, 0.228, 0.778],
        0x2280: [0.705, 0.208, 0.778],
        0x2281: [0.705, 0.208, 0.778],
        0x2282: [0.54, 0.04, 0.778],
        0x2283: [0.54, 0.04, 0.778],
        0x2284: [0.716, 0.215, 0.778],
        0x2285: [0.716, 0.215, 0.778],
        0x2286: [0.636, 0.138, 0.778],
        0x2287: [0.636, 0.138, 0.778],
        0x2288: [0.801, 0.303, 0.778],
        0x2289: [0.801, 0.303, 0.778],
        0x228a: [0.635, 0.241, 0.778],
        0x228b: [0.635, 0.241, 0.778],
        0x228e: [0.598, 0.022, 0.667],
        0x228f: [0.539, 0.041, 0.778],
        0x2290: [0.539, 0.041, 0.778],
        0x2291: [0.636, 0.138, 0.778],
        0x2292: [0.636, 0.138, 0.778],
        0x2293: [0.598, 0, 0.667],
        0x2294: [0.598, 0, 0.667],
        0x2295: [0.583, 0.083, 0.778],
        0x2296: [0.583, 0.083, 0.778],
        0x2297: [0.583, 0.083, 0.778],
        0x2298: [0.583, 0.083, 0.778],
        0x2299: [0.583, 0.083, 0.778],
        0x229a: [0.582, 0.082, 0.778],
        0x229b: [0.582, 0.082, 0.778],
        0x229d: [0.582, 0.082, 0.778],
        0x229e: [0.689, 0, 0.778],
        0x229f: [0.689, 0, 0.778],
        0x22a0: [0.689, 0, 0.778],
        0x22a1: [0.689, 0, 0.778],
        0x22a2: [0.694, 0, 0.611],
        0x22a3: [0.694, 0, 0.611],
        0x22a4: [0.668, 0, 0.778],
        0x22a5: [0.668, 0, 0.778],
        0x22a8: [0.75, 0.249, 0.867],
        0x22a9: [0.694, 0, 0.722],
        0x22aa: [0.694, 0, 0.889],
        0x22ac: [0.695, 0, 0.611],
        0x22ad: [0.695, 0, 0.611],
        0x22ae: [0.695, 0, 0.722],
        0x22af: [0.695, 0, 0.722],
        0x22b2: [0.539, 0.041, 0.778],
        0x22b3: [0.539, 0.041, 0.778],
        0x22b4: [0.636, 0.138, 0.778],
        0x22b5: [0.636, 0.138, 0.778],
        0x22b8: [0.408, -0.092, 1.111],
        0x22ba: [0.431, 0.212, 0.556],
        0x22bb: [0.716, 0, 0.611],
        0x22bc: [0.716, 0, 0.611],
        0x22c0: [0.75, 0.249, 0.833],
        0x22c1: [0.75, 0.249, 0.833],
        0x22c2: [0.75, 0.249, 0.833],
        0x22c3: [0.75, 0.249, 0.833],
        0x22c4: [0.488, -0.012, 0.5],
        0x22c5: [0.31, -0.19, 0.278],
        0x22c6: [0.486, -0.016, 0.5],
        0x22c7: [0.545, 0.044, 0.778],
        0x22c8: [0.505, 0.005, 0.9],
        0x22c9: [0.492, -0.008, 0.778],
        0x22ca: [0.492, -0.008, 0.778],
        0x22cb: [0.694, 0.022, 0.778],
        0x22cc: [0.694, 0.022, 0.778],
        0x22cd: [0.464, -0.036, 0.778],
        0x22ce: [0.578, 0.021, 0.76],
        0x22cf: [0.578, 0.022, 0.76],
        0x22d0: [0.54, 0.04, 0.778],
        0x22d1: [0.54, 0.04, 0.778],
        0x22d2: [0.598, 0.022, 0.667],
        0x22d3: [0.598, 0.022, 0.667],
        0x22d4: [0.736, 0.022, 0.667],
        0x22d6: [0.541, 0.041, 0.778],
        0x22d7: [0.541, 0.041, 0.778],
        0x22d8: [0.568, 0.067, 1.333],
        0x22d9: [0.568, 0.067, 1.333],
        0x22da: [0.886, 0.386, 0.778],
        0x22db: [0.886, 0.386, 0.778],
        0x22de: [0.734, 0, 0.778],
        0x22df: [0.734, 0, 0.778],
        0x22e0: [0.801, 0.303, 0.778],
        0x22e1: [0.801, 0.303, 0.778],
        0x22e2: [0.716, 0.215, 0.778],
        0x22e3: [0.716, 0.215, 0.778],
        0x22e6: [0.73, 0.359, 0.778],
        0x22e7: [0.73, 0.359, 0.778],
        0x22e8: [0.73, 0.359, 0.778],
        0x22e9: [0.73, 0.359, 0.778],
        0x22ea: [0.706, 0.208, 0.778],
        0x22eb: [0.706, 0.208, 0.778],
        0x22ec: [0.802, 0.303, 0.778],
        0x22ed: [0.801, 0.303, 0.778],
        0x22ee: [1.3, 0.03, 0.278],
        0x22ef: [0.31, -0.19, 1.172],
        0x22f1: [1.52, -0.1, 1.282],
        0x2305: [0.716, 0, 0.611],
        0x2306: [0.813, 0.097, 0.611],
        0x2308: [0.75, 0.25, 0.444],
        0x2309: [0.75, 0.25, 0.444],
        0x230a: [0.75, 0.25, 0.444],
        0x230b: [0.75, 0.25, 0.444],
        0x231c: [0.694, -0.306, 0.5],
        0x231d: [0.694, -0.306, 0.5],
        0x231e: [0.366, 0.022, 0.5],
        0x231f: [0.366, 0.022, 0.5],
        0x2322: [0.388, -0.122, 1],
        0x2323: [0.378, -0.134, 1],
        0x2329: [0.75, 0.25, 0.389],
        0x232a: [0.75, 0.25, 0.389],
        0x23b0: [0.744, 0.244, 0.412],
        0x23b1: [0.744, 0.244, 0.412],
        0x23d0: [0.602, 0, 0.667],
        0x24c8: [0.709, 0.175, 0.902],
        0x250c: [0.694, -0.306, 0.5],
        0x2510: [0.694, -0.306, 0.5],
        0x2514: [0.366, 0.022, 0.5],
        0x2518: [0.366, 0.022, 0.5],
        0x2571: [0.694, 0.195, 0.889],
        0x2572: [0.694, 0.195, 0.889],
        0x25a0: [0.689, 0, 0.778],
        0x25a1: [0.689, 0, 0.778],
        0x25aa: [0.689, 0, 0.778],
        0x25b2: [0.575, 0.02, 0.722],
        0x25b3: [0.716, 0, 0.889],
        0x25b4: [0.575, 0.02, 0.722],
        0x25b5: [0.716, 0, 0.889],
        0x25b6: [0.539, 0.041, 0.778],
        0x25b8: [0.539, 0.041, 0.778],
        0x25b9: [0.505, 0.005, 0.5],
        0x25bc: [0.576, 0.019, 0.722],
        0x25bd: [0.5, 0.215, 0.889],
        0x25be: [0.576, 0.019, 0.722],
        0x25bf: [0.5, 0.215, 0.889],
        0x25c0: [0.539, 0.041, 0.778],
        0x25c2: [0.539, 0.041, 0.778],
        0x25c3: [0.505, 0.005, 0.5],
        0x25ca: [0.716, 0.132, 0.667],
        0x25ef: [0.715, 0.215, 1],
        0x25fb: [0.689, 0, 0.778],
        0x25fc: [0.689, 0, 0.778],
        0x2605: [0.694, 0.111, 0.944],
        0x2660: [0.727, 0.13, 0.778],
        0x2661: [0.716, 0.033, 0.778],
        0x2662: [0.727, 0.162, 0.778],
        0x2663: [0.726, 0.13, 0.778],
        0x266d: [0.75, 0.022, 0.389],
        0x266e: [0.734, 0.223, 0.389],
        0x266f: [0.723, 0.223, 0.389],
        0x2713: [0.706, 0.034, 0.833],
        0x2720: [0.716, 0.022, 0.833],
        0x2758: [0.75, 0.249, 0.278],
        0x27e8: [0.75, 0.25, 0.389],
        0x27e9: [0.75, 0.25, 0.389],
        0x27ee: [0.744, 0.244, 0.412],
        0x27ef: [0.744, 0.244, 0.412],
        0x27f5: [0.511, 0.011, 1.609],
        0x27f6: [0.511, 0.011, 1.638],
        0x27f7: [0.511, 0.011, 1.859],
        0x27f8: [0.525, 0.024, 1.609],
        0x27f9: [0.525, 0.024, 1.638],
        0x27fa: [0.525, 0.024, 1.858],
        0x27fc: [0.511, 0.011, 1.638],
        0x29eb: [0.716, 0.132, 0.667],
        0x29f8: [0.716, 0.215, 0.778],
        0x2a00: [0.75, 0.25, 1.111],
        0x2a01: [0.75, 0.25, 1.111],
        0x2a02: [0.75, 0.25, 1.111],
        0x2a04: [0.75, 0.249, 0.833],
        0x2a06: [0.75, 0.249, 0.833],
        0x2a0c: [0.805, 0.306, 1.638, { ic: 0.138 }],
        0x2a2f: [0.491, -0.009, 0.778],
        0x2a3f: [0.683, 0, 0.75],
        0x2a5e: [0.813, 0.097, 0.611],
        0x2a7d: [0.636, 0.138, 0.778],
        0x2a7e: [0.636, 0.138, 0.778],
        0x2a85: [0.762, 0.29, 0.778],
        0x2a86: [0.762, 0.29, 0.778],
        0x2a87: [0.635, 0.241, 0.778],
        0x2a88: [0.635, 0.241, 0.778],
        0x2a89: [0.761, 0.387, 0.778],
        0x2a8a: [0.761, 0.387, 0.778],
        0x2a8b: [1.003, 0.463, 0.778],
        0x2a8c: [1.003, 0.463, 0.778],
        0x2a95: [0.636, 0.138, 0.778],
        0x2a96: [0.636, 0.138, 0.778],
        0x2aaf: [0.636, 0.138, 0.778],
        0x2ab0: [0.636, 0.138, 0.778],
        0x2ab5: [0.752, 0.286, 0.778],
        0x2ab6: [0.752, 0.286, 0.778],
        0x2ab7: [0.761, 0.294, 0.778],
        0x2ab8: [0.761, 0.294, 0.778],
        0x2ab9: [0.761, 0.337, 0.778],
        0x2aba: [0.761, 0.337, 0.778],
        0x2ac5: [0.753, 0.215, 0.778],
        0x2ac6: [0.753, 0.215, 0.778],
        0x2acb: [0.783, 0.385, 0.778],
        0x2acc: [0.783, 0.385, 0.778],
        0x3008: [0.75, 0.25, 0.389],
        0x3009: [0.75, 0.25, 0.389],
        0xe006: [0.43, 0.023, 0.222, { ic: 0.018 }],
        0xe007: [0.431, 0.024, 0.389, { ic: 0.018 }],
        0xe008: [0.605, 0.085, 0.778],
        0xe009: [0.434, 0.006, 0.667, { ic: 0.067 }],
        0xe00c: [0.752, 0.284, 0.778],
        0xe00d: [0.752, 0.284, 0.778],
        0xe00e: [0.919, 0.421, 0.778],
        0xe00f: [0.801, 0.303, 0.778],
        0xe010: [0.801, 0.303, 0.778],
        0xe011: [0.919, 0.421, 0.778],
        0xe016: [0.828, 0.33, 0.778],
        0xe017: [0.752, 0.332, 0.778],
        0xe018: [0.828, 0.33, 0.778],
        0xe019: [0.752, 0.333, 0.778],
        0xe01a: [0.634, 0.255, 0.778],
        0xe01b: [0.634, 0.254, 0.778],
        0x1d400: [0.698, 0, 0.869],
        0x1d401: [0.686, 0, 0.818],
        0x1d402: [0.697, 0.011, 0.831],
        0x1d403: [0.686, 0, 0.882],
        0x1d404: [0.68, 0, 0.756],
        0x1d405: [0.68, 0, 0.724],
        0x1d406: [0.697, 0.01, 0.904],
        0x1d407: [0.686, 0, 0.9],
        0x1d408: [0.686, 0, 0.436],
        0x1d409: [0.686, 0.011, 0.594],
        0x1d40a: [0.686, 0, 0.901],
        0x1d40b: [0.686, 0, 0.692],
        0x1d40c: [0.686, 0, 1.092],
        0x1d40d: [0.686, 0, 0.9],
        0x1d40e: [0.696, 0.01, 0.864],
        0x1d40f: [0.686, 0, 0.786],
        0x1d410: [0.696, 0.193, 0.864],
        0x1d411: [0.686, 0.011, 0.862],
        0x1d412: [0.697, 0.011, 0.639],
        0x1d413: [0.675, 0, 0.8],
        0x1d414: [0.686, 0.011, 0.885],
        0x1d415: [0.686, 0.007, 0.869],
        0x1d416: [0.686, 0.007, 1.189],
        0x1d417: [0.686, 0, 0.869],
        0x1d418: [0.686, 0, 0.869],
        0x1d419: [0.686, 0, 0.703],
        0x1d41a: [0.453, 0.006, 0.559],
        0x1d41b: [0.694, 0.006, 0.639],
        0x1d41c: [0.453, 0.006, 0.511],
        0x1d41d: [0.694, 0.006, 0.639],
        0x1d41e: [0.452, 0.006, 0.527],
        0x1d41f: [0.7, 0, 0.351, { ic: 0.101 }],
        0x1d420: [0.455, 0.201, 0.575],
        0x1d421: [0.694, 0, 0.639],
        0x1d422: [0.695, 0, 0.319],
        0x1d423: [0.695, 0.2, 0.351],
        0x1d424: [0.694, 0, 0.607],
        0x1d425: [0.694, 0, 0.319],
        0x1d426: [0.45, 0, 0.958],
        0x1d427: [0.45, 0, 0.639],
        0x1d428: [0.452, 0.005, 0.575],
        0x1d429: [0.45, 0.194, 0.639],
        0x1d42a: [0.45, 0.194, 0.607],
        0x1d42b: [0.45, 0, 0.474],
        0x1d42c: [0.453, 0.006, 0.454],
        0x1d42d: [0.635, 0.005, 0.447],
        0x1d42e: [0.45, 0.006, 0.639],
        0x1d42f: [0.444, 0, 0.607],
        0x1d430: [0.444, 0, 0.831],
        0x1d431: [0.444, 0, 0.607],
        0x1d432: [0.444, 0.2, 0.607],
        0x1d433: [0.444, 0, 0.511],
        0x1d434: [0.716, 0, 0.75, { sk: 0.139 }],
        0x1d435: [0.683, 0, 0.759, { sk: 0.0833 }],
        0x1d436: [0.705, 0.022, 0.715, { ic: 0.045, sk: 0.0833 }],
        0x1d437: [0.683, 0, 0.828, { sk: 0.0556 }],
        0x1d438: [0.68, 0, 0.738, { ic: 0.026, sk: 0.0833 }],
        0x1d439: [0.68, 0, 0.643, { ic: 0.106, sk: 0.0833 }],
        0x1d43a: [0.705, 0.022, 0.786, { sk: 0.0833 }],
        0x1d43b: [0.683, 0, 0.831, { ic: 0.057, sk: 0.0556 }],
        0x1d43c: [0.683, 0, 0.44, { ic: 0.064, sk: 0.111 }],
        0x1d43d: [0.683, 0.022, 0.555, { ic: 0.078, sk: 0.167 }],
        0x1d43e: [0.683, 0, 0.849, { ic: 0.04, sk: 0.0556 }],
        0x1d43f: [0.683, 0, 0.681, { sk: 0.0278 }],
        0x1d440: [0.683, 0, 0.97, { ic: 0.081, sk: 0.0833 }],
        0x1d441: [0.683, 0, 0.803, { ic: 0.085, sk: 0.0833 }],
        0x1d442: [0.704, 0.022, 0.763, { sk: 0.0833 }],
        0x1d443: [0.683, 0, 0.642, { ic: 0.109, sk: 0.0833 }],
        0x1d444: [0.704, 0.194, 0.791, { sk: 0.0833 }],
        0x1d445: [0.683, 0.021, 0.759, { sk: 0.0833 }],
        0x1d446: [0.705, 0.022, 0.613, { ic: 0.032, sk: 0.0833 }],
        0x1d447: [0.677, 0, 0.584, { ic: 0.12, sk: 0.0833 }],
        0x1d448: [0.683, 0.022, 0.683, { ic: 0.084, sk: 0.0278 }],
        0x1d449: [0.683, 0.022, 0.583, { ic: 0.186 }],
        0x1d44a: [0.683, 0.022, 0.944, { ic: 0.104 }],
        0x1d44b: [0.683, 0, 0.828, { ic: 0.024, sk: 0.0833 }],
        0x1d44c: [0.683, 0, 0.581, { ic: 0.182 }],
        0x1d44d: [0.683, 0, 0.683, { ic: 0.04, sk: 0.0833 }],
        0x1d44e: [0.441, 0.01, 0.529],
        0x1d44f: [0.694, 0.011, 0.429],
        0x1d450: [0.442, 0.011, 0.433, { sk: 0.0556 }],
        0x1d451: [0.694, 0.01, 0.52, { sk: 0.167 }],
        0x1d452: [0.442, 0.011, 0.466, { sk: 0.0556 }],
        0x1d453: [0.705, 0.205, 0.49, { ic: 0.06, sk: 0.167 }],
        0x1d454: [0.442, 0.205, 0.477, { sk: 0.0278 }],
        0x1d456: [0.661, 0.011, 0.345],
        0x1d457: [0.661, 0.204, 0.412],
        0x1d458: [0.694, 0.011, 0.521],
        0x1d459: [0.694, 0.011, 0.298, { sk: 0.0833 }],
        0x1d45a: [0.442, 0.011, 0.878],
        0x1d45b: [0.442, 0.011, 0.6],
        0x1d45c: [0.441, 0.011, 0.485, { sk: 0.0556 }],
        0x1d45d: [0.442, 0.194, 0.503, { sk: 0.0833 }],
        0x1d45e: [0.442, 0.194, 0.446, { ic: 0.014, sk: 0.0833 }],
        0x1d45f: [0.442, 0.011, 0.451, { sk: 0.0556 }],
        0x1d460: [0.442, 0.01, 0.469, { sk: 0.0556 }],
        0x1d461: [0.626, 0.011, 0.361, { sk: 0.0833 }],
        0x1d462: [0.442, 0.011, 0.572, { sk: 0.0278 }],
        0x1d463: [0.443, 0.011, 0.485, { sk: 0.0278 }],
        0x1d464: [0.443, 0.011, 0.716, { sk: 0.0833 }],
        0x1d465: [0.442, 0.011, 0.572, { sk: 0.0278 }],
        0x1d466: [0.442, 0.205, 0.49, { sk: 0.0556 }],
        0x1d467: [0.442, 0.011, 0.465, { sk: 0.0556 }],
        0x1d468: [0.711, 0, 0.869, { sk: 0.16 }],
        0x1d469: [0.686, 0, 0.866, { sk: 0.0958 }],
        0x1d46a: [0.703, 0.017, 0.817, { ic: 0.038, sk: 0.0958 }],
        0x1d46b: [0.686, 0, 0.938, { sk: 0.0639 }],
        0x1d46c: [0.68, 0, 0.81, { ic: 0.015, sk: 0.0958 }],
        0x1d46d: [0.68, 0, 0.689, { ic: 0.12, sk: 0.0958 }],
        0x1d46e: [0.703, 0.016, 0.887, { sk: 0.0958 }],
        0x1d46f: [0.686, 0, 0.982, { ic: 0.045, sk: 0.0639 }],
        0x1d470: [0.686, 0, 0.511, { ic: 0.062, sk: 0.128 }],
        0x1d471: [0.686, 0.017, 0.631, { ic: 0.063, sk: 0.192 }],
        0x1d472: [0.686, 0, 0.971, { ic: 0.032, sk: 0.0639 }],
        0x1d473: [0.686, 0, 0.756, { sk: 0.0319 }],
        0x1d474: [0.686, 0, 1.142, { ic: 0.077, sk: 0.0958 }],
        0x1d475: [0.686, 0, 0.95, { ic: 0.077, sk: 0.0958 }],
        0x1d476: [0.703, 0.017, 0.837, { sk: 0.0958 }],
        0x1d477: [0.686, 0, 0.723, { ic: 0.124, sk: 0.0958 }],
        0x1d478: [0.703, 0.194, 0.869, { sk: 0.0958 }],
        0x1d479: [0.686, 0.017, 0.872, { sk: 0.0958 }],
        0x1d47a: [0.703, 0.017, 0.693, { ic: 0.021, sk: 0.0958 }],
        0x1d47b: [0.675, 0, 0.637, { ic: 0.135, sk: 0.0958 }],
        0x1d47c: [0.686, 0.016, 0.8, { ic: 0.077, sk: 0.0319 }],
        0x1d47d: [0.686, 0.016, 0.678, { ic: 0.208 }],
        0x1d47e: [0.686, 0.017, 1.093, { ic: 0.114 }],
        0x1d47f: [0.686, 0, 0.947, { sk: 0.0958 }],
        0x1d480: [0.686, 0, 0.675, { ic: 0.201 }],
        0x1d481: [0.686, 0, 0.773, { ic: 0.032, sk: 0.0958 }],
        0x1d482: [0.452, 0.008, 0.633],
        0x1d483: [0.694, 0.008, 0.521],
        0x1d484: [0.451, 0.008, 0.513, { sk: 0.0639 }],
        0x1d485: [0.694, 0.008, 0.61, { sk: 0.192 }],
        0x1d486: [0.452, 0.008, 0.554, { sk: 0.0639 }],
        0x1d487: [0.701, 0.201, 0.568, { ic: 0.056, sk: 0.192 }],
        0x1d488: [0.452, 0.202, 0.545, { sk: 0.0319 }],
        0x1d489: [0.694, 0.008, 0.668, { sk: -0.0319 }],
        0x1d48a: [0.694, 0.008, 0.405],
        0x1d48b: [0.694, 0.202, 0.471],
        0x1d48c: [0.694, 0.008, 0.604],
        0x1d48d: [0.694, 0.008, 0.348, { sk: 0.0958 }],
        0x1d48e: [0.452, 0.008, 1.032],
        0x1d48f: [0.452, 0.008, 0.713],
        0x1d490: [0.452, 0.008, 0.585, { sk: 0.0639 }],
        0x1d491: [0.452, 0.194, 0.601, { sk: 0.0958 }],
        0x1d492: [0.452, 0.194, 0.542, { sk: 0.0958 }],
        0x1d493: [0.452, 0.008, 0.529, { sk: 0.0639 }],
        0x1d494: [0.451, 0.008, 0.531, { sk: 0.0639 }],
        0x1d495: [0.643, 0.007, 0.415, { sk: 0.0958 }],
        0x1d496: [0.452, 0.008, 0.681, { sk: 0.0319 }],
        0x1d497: [0.453, 0.008, 0.567, { sk: 0.0319 }],
        0x1d498: [0.453, 0.008, 0.831, { sk: 0.0958 }],
        0x1d499: [0.452, 0.008, 0.659, { sk: 0.0319 }],
        0x1d49a: [0.452, 0.202, 0.59, { sk: 0.0639 }],
        0x1d49b: [0.452, 0.008, 0.555, { sk: 0.0639 }],
        0x1d49c: [0.717, 0.008, 0.803, { ic: 0.213, sk: 0.389 }],
        0x1d49e: [0.728, 0.026, 0.666, { ic: 0.153, sk: 0.278 }],
        0x1d49f: [0.708, 0.031, 0.774, { ic: 0.081, sk: 0.111 }],
        0x1d4a2: [0.717, 0.037, 0.61, { ic: 0.128, sk: 0.25 }],
        0x1d4a5: [0.717, 0.314, 1.052, { ic: 0.081, sk: 0.417 }],
        0x1d4a6: [0.717, 0.037, 0.914, { ic: 0.29, sk: 0.361 }],
        0x1d4a9: [0.726, 0.036, 0.902, { ic: 0.306, sk: 0.389 }],
        0x1d4aa: [0.707, 0.008, 0.738, { ic: 0.067, sk: 0.167 }],
        0x1d4ab: [0.716, 0.037, 1.013, { ic: 0.018, sk: 0.222 }],
        0x1d4ac: [0.717, 0.017, 0.883, { sk: 0.278 }],
        0x1d4ae: [0.708, 0.036, 0.868, { ic: 0.148, sk: 0.333 }],
        0x1d4af: [0.735, 0.037, 0.747, { ic: 0.249, sk: 0.222 }],
        0x1d4b0: [0.717, 0.017, 0.8, { ic: 0.16, sk: 0.25 }],
        0x1d4b1: [0.717, 0.017, 0.622, { ic: 0.228, sk: 0.222 }],
        0x1d4b2: [0.717, 0.017, 0.805, { ic: 0.221, sk: 0.25 }],
        0x1d4b3: [0.717, 0.017, 0.944, { ic: 0.187, sk: 0.278 }],
        0x1d4b4: [0.716, 0.017, 0.71, { ic: 0.249, sk: 0.194 }],
        0x1d4b5: [0.717, 0.016, 0.821, { ic: 0.211, sk: 0.306 }],
        0x1d504: [0.696, 0.026, 0.718],
        0x1d505: [0.691, 0.027, 0.884],
        0x1d507: [0.685, 0.027, 0.832],
        0x1d508: [0.685, 0.024, 0.663],
        0x1d509: [0.686, 0.153, 0.611],
        0x1d50a: [0.69, 0.026, 0.785],
        0x1d50d: [0.686, 0.139, 0.552],
        0x1d50e: [0.68, 0.027, 0.668, { ic: 0.014 }],
        0x1d50f: [0.686, 0.026, 0.666],
        0x1d510: [0.692, 0.027, 1.05],
        0x1d511: [0.686, 0.025, 0.832],
        0x1d512: [0.729, 0.027, 0.827],
        0x1d513: [0.692, 0.218, 0.828],
        0x1d514: [0.729, 0.069, 0.827],
        0x1d516: [0.692, 0.027, 0.829],
        0x1d517: [0.701, 0.027, 0.669],
        0x1d518: [0.697, 0.027, 0.646, { ic: 0.019 }],
        0x1d519: [0.686, 0.026, 0.831],
        0x1d51a: [0.686, 0.027, 1.046],
        0x1d51b: [0.688, 0.027, 0.719],
        0x1d51c: [0.686, 0.218, 0.833],
        0x1d51e: [0.47, 0.035, 0.5],
        0x1d51f: [0.685, 0.031, 0.513],
        0x1d520: [0.466, 0.029, 0.389],
        0x1d521: [0.609, 0.033, 0.499],
        0x1d522: [0.467, 0.03, 0.401],
        0x1d523: [0.681, 0.221, 0.326],
        0x1d524: [0.47, 0.209, 0.504],
        0x1d525: [0.688, 0.205, 0.521],
        0x1d526: [0.673, 0.02, 0.279],
        0x1d527: [0.672, 0.208, 0.281],
        0x1d528: [0.689, 0.025, 0.389],
        0x1d529: [0.685, 0.02, 0.28],
        0x1d52a: [0.475, 0.026, 0.767],
        0x1d52b: [0.475, 0.022, 0.527],
        0x1d52c: [0.48, 0.028, 0.489],
        0x1d52d: [0.541, 0.212, 0.5],
        0x1d52e: [0.479, 0.219, 0.489],
        0x1d52f: [0.474, 0.021, 0.389],
        0x1d530: [0.478, 0.029, 0.443],
        0x1d531: [0.64, 0.02, 0.333, { ic: 0.015 }],
        0x1d532: [0.474, 0.023, 0.517],
        0x1d533: [0.53, 0.028, 0.512],
        0x1d534: [0.532, 0.028, 0.774],
        0x1d535: [0.472, 0.188, 0.389],
        0x1d536: [0.528, 0.218, 0.499],
        0x1d537: [0.471, 0.214, 0.391],
        0x1d538: [0.701, 0, 0.722],
        0x1d539: [0.683, 0, 0.667],
        0x1d53b: [0.683, 0, 0.722],
        0x1d53c: [0.683, 0, 0.667],
        0x1d53d: [0.683, 0, 0.611],
        0x1d53e: [0.702, 0.019, 0.778],
        0x1d540: [0.683, 0, 0.389],
        0x1d541: [0.683, 0.077, 0.5],
        0x1d542: [0.683, 0, 0.778],
        0x1d543: [0.683, 0, 0.667],
        0x1d544: [0.683, 0, 0.944],
        0x1d546: [0.701, 0.019, 0.778],
        0x1d54a: [0.702, 0.012, 0.556],
        0x1d54b: [0.683, 0, 0.667],
        0x1d54c: [0.683, 0.019, 0.722],
        0x1d54d: [0.683, 0.02, 0.722],
        0x1d54e: [0.683, 0.019, 1],
        0x1d54f: [0.683, 0, 0.722],
        0x1d550: [0.683, 0, 0.722],
        0x1d56c: [0.686, 0.031, 0.847],
        0x1d56d: [0.684, 0.031, 1.044],
        0x1d56e: [0.676, 0.032, 0.723],
        0x1d56f: [0.683, 0.029, 0.982],
        0x1d570: [0.686, 0.029, 0.783],
        0x1d571: [0.684, 0.146, 0.722],
        0x1d572: [0.687, 0.029, 0.927],
        0x1d573: [0.683, 0.126, 0.851],
        0x1d574: [0.681, 0.025, 0.655],
        0x1d575: [0.68, 0.141, 0.652],
        0x1d576: [0.681, 0.026, 0.789, { ic: 0.017 }],
        0x1d577: [0.683, 0.028, 0.786],
        0x1d578: [0.683, 0.032, 1.239],
        0x1d579: [0.679, 0.03, 0.983],
        0x1d57a: [0.726, 0.03, 0.976],
        0x1d57b: [0.688, 0.223, 0.977],
        0x1d57c: [0.726, 0.083, 0.976],
        0x1d57d: [0.688, 0.028, 0.978],
        0x1d57e: [0.685, 0.031, 0.978],
        0x1d57f: [0.686, 0.03, 0.79, { ic: 0.012 }],
        0x1d580: [0.688, 0.039, 0.851, { ic: 0.02 }],
        0x1d581: [0.685, 0.029, 0.982],
        0x1d582: [0.683, 0.03, 1.235],
        0x1d583: [0.681, 0.035, 0.849],
        0x1d584: [0.688, 0.214, 0.984],
        0x1d585: [0.677, 0.148, 0.711],
        0x1d586: [0.472, 0.032, 0.603],
        0x1d587: [0.69, 0.032, 0.59],
        0x1d588: [0.473, 0.026, 0.464],
        0x1d589: [0.632, 0.028, 0.589],
        0x1d58a: [0.471, 0.027, 0.472],
        0x1d58b: [0.687, 0.222, 0.388],
        0x1d58c: [0.472, 0.208, 0.595],
        0x1d58d: [0.687, 0.207, 0.615],
        0x1d58e: [0.686, 0.025, 0.331],
        0x1d58f: [0.682, 0.203, 0.332],
        0x1d590: [0.682, 0.025, 0.464],
        0x1d591: [0.681, 0.024, 0.337],
        0x1d592: [0.476, 0.031, 0.921],
        0x1d593: [0.473, 0.028, 0.654],
        0x1d594: [0.482, 0.034, 0.609],
        0x1d595: [0.557, 0.207, 0.604],
        0x1d596: [0.485, 0.211, 0.596],
        0x1d597: [0.472, 0.026, 0.46],
        0x1d598: [0.479, 0.034, 0.523],
        0x1d599: [0.648, 0.027, 0.393, { ic: 0.014 }],
        0x1d59a: [0.472, 0.032, 0.589, { ic: 0.014 }],
        0x1d59b: [0.546, 0.027, 0.604],
        0x1d59c: [0.549, 0.032, 0.918],
        0x1d59d: [0.471, 0.188, 0.459],
        0x1d59e: [0.557, 0.221, 0.589],
        0x1d59f: [0.471, 0.214, 0.461],
        0x1d5a0: [0.694, 0, 0.667],
        0x1d5a1: [0.694, 0, 0.667],
        0x1d5a2: [0.705, 0.011, 0.639],
        0x1d5a3: [0.694, 0, 0.722],
        0x1d5a4: [0.691, 0, 0.597],
        0x1d5a5: [0.691, 0, 0.569],
        0x1d5a6: [0.704, 0.011, 0.667],
        0x1d5a7: [0.694, 0, 0.708],
        0x1d5a8: [0.694, 0, 0.278],
        0x1d5a9: [0.694, 0.022, 0.472],
        0x1d5aa: [0.694, 0, 0.694],
        0x1d5ab: [0.694, 0, 0.542],
        0x1d5ac: [0.694, 0, 0.875],
        0x1d5ad: [0.694, 0, 0.708],
        0x1d5ae: [0.715, 0.022, 0.736],
        0x1d5af: [0.694, 0, 0.639],
        0x1d5b0: [0.715, 0.125, 0.736],
        0x1d5b1: [0.694, 0, 0.646],
        0x1d5b2: [0.716, 0.022, 0.556],
        0x1d5b3: [0.688, 0, 0.681],
        0x1d5b4: [0.694, 0.022, 0.688],
        0x1d5b5: [0.694, 0, 0.667],
        0x1d5b6: [0.694, 0, 0.944],
        0x1d5b7: [0.694, 0, 0.667],
        0x1d5b8: [0.694, 0, 0.667],
        0x1d5b9: [0.694, 0, 0.611],
        0x1d5ba: [0.46, 0.01, 0.481],
        0x1d5bb: [0.694, 0.011, 0.517],
        0x1d5bc: [0.46, 0.01, 0.444],
        0x1d5bd: [0.694, 0.01, 0.517],
        0x1d5be: [0.461, 0.01, 0.444],
        0x1d5bf: [0.705, 0, 0.306, { ic: 0.041 }],
        0x1d5c0: [0.455, 0.206, 0.5],
        0x1d5c1: [0.694, 0, 0.517],
        0x1d5c2: [0.68, 0, 0.239],
        0x1d5c3: [0.68, 0.205, 0.267],
        0x1d5c4: [0.694, 0, 0.489],
        0x1d5c5: [0.694, 0, 0.239],
        0x1d5c6: [0.455, 0, 0.794],
        0x1d5c7: [0.455, 0, 0.517],
        0x1d5c8: [0.46, 0.01, 0.5],
        0x1d5c9: [0.455, 0.194, 0.517],
        0x1d5ca: [0.455, 0.194, 0.517],
        0x1d5cb: [0.455, 0, 0.342],
        0x1d5cc: [0.46, 0.01, 0.383],
        0x1d5cd: [0.571, 0.01, 0.361],
        0x1d5ce: [0.444, 0.01, 0.517],
        0x1d5cf: [0.444, 0, 0.461],
        0x1d5d0: [0.444, 0, 0.683],
        0x1d5d1: [0.444, 0, 0.461],
        0x1d5d2: [0.444, 0.204, 0.461],
        0x1d5d3: [0.444, 0, 0.435],
        0x1d5d4: [0.694, 0, 0.733],
        0x1d5d5: [0.694, 0, 0.733],
        0x1d5d6: [0.704, 0.011, 0.703],
        0x1d5d7: [0.694, 0, 0.794],
        0x1d5d8: [0.691, 0, 0.642],
        0x1d5d9: [0.691, 0, 0.611],
        0x1d5da: [0.705, 0.011, 0.733],
        0x1d5db: [0.694, 0, 0.794],
        0x1d5dc: [0.694, 0, 0.331],
        0x1d5dd: [0.694, 0.022, 0.519],
        0x1d5de: [0.694, 0, 0.764],
        0x1d5df: [0.694, 0, 0.581],
        0x1d5e0: [0.694, 0, 0.978],
        0x1d5e1: [0.694, 0, 0.794],
        0x1d5e2: [0.716, 0.022, 0.794],
        0x1d5e3: [0.694, 0, 0.703],
        0x1d5e4: [0.716, 0.106, 0.794],
        0x1d5e5: [0.694, 0, 0.703],
        0x1d5e6: [0.716, 0.022, 0.611],
        0x1d5e7: [0.688, 0, 0.733],
        0x1d5e8: [0.694, 0.022, 0.764],
        0x1d5e9: [0.694, 0, 0.733],
        0x1d5ea: [0.694, 0, 1.039],
        0x1d5eb: [0.694, 0, 0.733],
        0x1d5ec: [0.694, 0, 0.733],
        0x1d5ed: [0.694, 0, 0.672],
        0x1d5ee: [0.475, 0.011, 0.525],
        0x1d5ef: [0.694, 0.01, 0.561],
        0x1d5f0: [0.475, 0.011, 0.489],
        0x1d5f1: [0.694, 0.011, 0.561],
        0x1d5f2: [0.474, 0.01, 0.511],
        0x1d5f3: [0.705, 0, 0.336, { ic: 0.045 }],
        0x1d5f4: [0.469, 0.206, 0.55],
        0x1d5f5: [0.694, 0, 0.561],
        0x1d5f6: [0.695, 0, 0.256],
        0x1d5f7: [0.695, 0.205, 0.286],
        0x1d5f8: [0.694, 0, 0.531],
        0x1d5f9: [0.694, 0, 0.256],
        0x1d5fa: [0.469, 0, 0.867],
        0x1d5fb: [0.468, 0, 0.561],
        0x1d5fc: [0.474, 0.011, 0.55],
        0x1d5fd: [0.469, 0.194, 0.561],
        0x1d5fe: [0.469, 0.194, 0.561],
        0x1d5ff: [0.469, 0, 0.372],
        0x1d600: [0.474, 0.01, 0.422],
        0x1d601: [0.589, 0.01, 0.404],
        0x1d602: [0.458, 0.011, 0.561],
        0x1d603: [0.458, 0, 0.5],
        0x1d604: [0.458, 0, 0.744],
        0x1d605: [0.458, 0, 0.5],
        0x1d606: [0.458, 0.205, 0.5],
        0x1d607: [0.458, 0, 0.476],
        0x1d608: [0.694, 0, 0.667],
        0x1d609: [0.694, 0, 0.667, { ic: 0.029 }],
        0x1d60a: [0.705, 0.01, 0.639, { ic: 0.08 }],
        0x1d60b: [0.694, 0, 0.722, { ic: 0.025 }],
        0x1d60c: [0.691, 0, 0.597, { ic: 0.091 }],
        0x1d60d: [0.691, 0, 0.569, { ic: 0.104 }],
        0x1d60e: [0.705, 0.011, 0.667, { ic: 0.063 }],
        0x1d60f: [0.694, 0, 0.708, { ic: 0.06 }],
        0x1d610: [0.694, 0, 0.278, { ic: 0.06 }],
        0x1d611: [0.694, 0.022, 0.472, { ic: 0.063 }],
        0x1d612: [0.694, 0, 0.694, { ic: 0.091 }],
        0x1d613: [0.694, 0, 0.542],
        0x1d614: [0.694, 0, 0.875, { ic: 0.054 }],
        0x1d615: [0.694, 0, 0.708, { ic: 0.058 }],
        0x1d616: [0.716, 0.022, 0.736, { ic: 0.027 }],
        0x1d617: [0.694, 0, 0.639, { ic: 0.051 }],
        0x1d618: [0.716, 0.125, 0.736, { ic: 0.027 }],
        0x1d619: [0.694, 0, 0.646, { ic: 0.052 }],
        0x1d61a: [0.716, 0.022, 0.556, { ic: 0.053 }],
        0x1d61b: [0.688, 0, 0.681, { ic: 0.109 }],
        0x1d61c: [0.694, 0.022, 0.688, { ic: 0.059 }],
        0x1d61d: [0.694, 0, 0.667, { ic: 0.132 }],
        0x1d61e: [0.694, 0, 0.944, { ic: 0.132 }],
        0x1d61f: [0.694, 0, 0.667, { ic: 0.091 }],
        0x1d620: [0.694, 0, 0.667, { ic: 0.143 }],
        0x1d621: [0.694, 0, 0.611, { ic: 0.091 }],
        0x1d622: [0.461, 0.01, 0.481],
        0x1d623: [0.694, 0.011, 0.517, { ic: 0.022 }],
        0x1d624: [0.46, 0.011, 0.444, { ic: 0.055 }],
        0x1d625: [0.694, 0.01, 0.517, { ic: 0.071 }],
        0x1d626: [0.46, 0.011, 0.444, { ic: 0.028 }],
        0x1d627: [0.705, 0, 0.306, { ic: 0.188 }],
        0x1d628: [0.455, 0.206, 0.5, { ic: 0.068 }],
        0x1d629: [0.694, 0, 0.517],
        0x1d62a: [0.68, 0, 0.239, { ic: 0.076 }],
        0x1d62b: [0.68, 0.204, 0.267, { ic: 0.069 }],
        0x1d62c: [0.694, 0, 0.489, { ic: 0.054 }],
        0x1d62d: [0.694, 0, 0.239, { ic: 0.072 }],
        0x1d62e: [0.455, 0, 0.794],
        0x1d62f: [0.454, 0, 0.517],
        0x1d630: [0.461, 0.011, 0.5, { ic: 0.023 }],
        0x1d631: [0.455, 0.194, 0.517, { ic: 0.021 }],
        0x1d632: [0.455, 0.194, 0.517, { ic: 0.021 }],
        0x1d633: [0.455, 0, 0.342, { ic: 0.082 }],
        0x1d634: [0.461, 0.011, 0.383, { ic: 0.053 }],
        0x1d635: [0.571, 0.011, 0.361, { ic: 0.049 }],
        0x1d636: [0.444, 0.01, 0.517, { ic: 0.02 }],
        0x1d637: [0.444, 0, 0.461, { ic: 0.079 }],
        0x1d638: [0.444, 0, 0.683, { ic: 0.079 }],
        0x1d639: [0.444, 0, 0.461, { ic: 0.076 }],
        0x1d63a: [0.444, 0.205, 0.461, { ic: 0.079 }],
        0x1d63b: [0.444, 0, 0.435, { ic: 0.059 }],
        0x1d670: [0.623, 0, 0.525],
        0x1d671: [0.611, 0, 0.525],
        0x1d672: [0.622, 0.011, 0.525],
        0x1d673: [0.611, 0, 0.525],
        0x1d674: [0.611, 0, 0.525],
        0x1d675: [0.611, 0, 0.525],
        0x1d676: [0.622, 0.011, 0.525],
        0x1d677: [0.611, 0, 0.525],
        0x1d678: [0.611, 0, 0.525],
        0x1d679: [0.611, 0.011, 0.525],
        0x1d67a: [0.611, 0, 0.525],
        0x1d67b: [0.611, 0, 0.525],
        0x1d67c: [0.611, 0, 0.525],
        0x1d67d: [0.611, 0, 0.525],
        0x1d67e: [0.621, 0.01, 0.525],
        0x1d67f: [0.611, 0, 0.525],
        0x1d680: [0.621, 0.138, 0.525],
        0x1d681: [0.611, 0.011, 0.525],
        0x1d682: [0.622, 0.011, 0.525],
        0x1d683: [0.611, 0, 0.525],
        0x1d684: [0.611, 0.011, 0.525],
        0x1d685: [0.611, 0.007, 0.525],
        0x1d686: [0.611, 0.007, 0.525],
        0x1d687: [0.611, 0, 0.525],
        0x1d688: [0.611, 0, 0.525],
        0x1d689: [0.611, 0, 0.525],
        0x1d68a: [0.439, 0.006, 0.525],
        0x1d68b: [0.611, 0.006, 0.525],
        0x1d68c: [0.44, 0.006, 0.525],
        0x1d68d: [0.611, 0.006, 0.525],
        0x1d68e: [0.44, 0.006, 0.525],
        0x1d68f: [0.617, 0, 0.525],
        0x1d690: [0.442, 0.229, 0.525],
        0x1d691: [0.611, 0, 0.525],
        0x1d692: [0.612, 0, 0.525],
        0x1d693: [0.612, 0.228, 0.525],
        0x1d694: [0.611, 0, 0.525],
        0x1d695: [0.611, 0, 0.525],
        0x1d696: [0.436, 0, 0.525, { ic: 0.011 }],
        0x1d697: [0.436, 0, 0.525],
        0x1d698: [0.44, 0.006, 0.525],
        0x1d699: [0.437, 0.221, 0.525],
        0x1d69a: [0.437, 0.221, 0.525, { ic: 0.02 }],
        0x1d69b: [0.437, 0, 0.525],
        0x1d69c: [0.44, 0.006, 0.525],
        0x1d69d: [0.554, 0.006, 0.525],
        0x1d69e: [0.431, 0.005, 0.525],
        0x1d69f: [0.431, 0, 0.525],
        0x1d6a0: [0.431, 0, 0.525],
        0x1d6a1: [0.431, 0, 0.525],
        0x1d6a2: [0.431, 0.228, 0.525],
        0x1d6a3: [0.431, 0, 0.525],
        0x1d6a8: [0.698, 0, 0.869],
        0x1d6a9: [0.686, 0, 0.818],
        0x1d6aa: [0.68, 0, 0.692],
        0x1d6ab: [0.698, 0, 0.958],
        0x1d6ac: [0.68, 0, 0.756],
        0x1d6ad: [0.686, 0, 0.703],
        0x1d6ae: [0.686, 0, 0.9],
        0x1d6af: [0.696, 0.01, 0.894],
        0x1d6b0: [0.686, 0, 0.436],
        0x1d6b1: [0.686, 0, 0.901],
        0x1d6b2: [0.698, 0, 0.806],
        0x1d6b3: [0.686, 0, 1.092],
        0x1d6b4: [0.686, 0, 0.9],
        0x1d6b5: [0.675, 0, 0.767],
        0x1d6b6: [0.696, 0.01, 0.864],
        0x1d6b7: [0.68, 0, 0.9],
        0x1d6b8: [0.686, 0, 0.786],
        0x1d6ba: [0.686, 0, 0.831],
        0x1d6bb: [0.675, 0, 0.8],
        0x1d6bc: [0.697, 0, 0.894],
        0x1d6bd: [0.686, 0, 0.831],
        0x1d6be: [0.686, 0, 0.869],
        0x1d6bf: [0.686, 0, 0.894],
        0x1d6c0: [0.696, 0, 0.831],
        0x1d6c1: [0.686, 0.024, 0.958],
        0x1d6e2: [0.716, 0, 0.75, { sk: 0.139 }],
        0x1d6e3: [0.683, 0, 0.759, { sk: 0.0833 }],
        0x1d6e4: [0.68, 0, 0.615, { ic: 0.106, sk: 0.0833 }],
        0x1d6e5: [0.716, 0, 0.833, { sk: 0.167 }],
        0x1d6e6: [0.68, 0, 0.738, { ic: 0.026, sk: 0.0833 }],
        0x1d6e7: [0.683, 0, 0.683, { ic: 0.04, sk: 0.0833 }],
        0x1d6e8: [0.683, 0, 0.831, { ic: 0.057, sk: 0.0556 }],
        0x1d6e9: [0.704, 0.022, 0.763, { sk: 0.0833 }],
        0x1d6ea: [0.683, 0, 0.44, { ic: 0.064, sk: 0.111 }],
        0x1d6eb: [0.683, 0, 0.849, { ic: 0.04, sk: 0.0556 }],
        0x1d6ec: [0.716, 0, 0.694, { sk: 0.167 }],
        0x1d6ed: [0.683, 0, 0.97, { ic: 0.081, sk: 0.0833 }],
        0x1d6ee: [0.683, 0, 0.803, { ic: 0.085, sk: 0.0833 }],
        0x1d6ef: [0.677, 0, 0.742, { ic: 0.035, sk: 0.0833 }],
        0x1d6f0: [0.704, 0.022, 0.763, { sk: 0.0833 }],
        0x1d6f1: [0.68, 0, 0.831, { ic: 0.056, sk: 0.0556 }],
        0x1d6f2: [0.683, 0, 0.642, { ic: 0.109, sk: 0.0833 }],
        0x1d6f4: [0.683, 0, 0.78, { ic: 0.026, sk: 0.0833 }],
        0x1d6f5: [0.677, 0, 0.584, { ic: 0.12, sk: 0.0833 }],
        0x1d6f6: [0.705, 0, 0.583, { ic: 0.117, sk: 0.0556 }],
        0x1d6f7: [0.683, 0, 0.667, { sk: 0.0833 }],
        0x1d6f8: [0.683, 0, 0.828, { ic: 0.024, sk: 0.0833 }],
        0x1d6f9: [0.683, 0, 0.612, { ic: 0.08, sk: 0.0556 }],
        0x1d6fa: [0.704, 0, 0.772, { ic: 0.014, sk: 0.0833 }],
        0x1d6fc: [0.442, 0.011, 0.64, { sk: 0.0278 }],
        0x1d6fd: [0.705, 0.194, 0.566, { sk: 0.0833 }],
        0x1d6fe: [0.441, 0.216, 0.518, { ic: 0.025 }],
        0x1d6ff: [0.717, 0.01, 0.444, { sk: 0.0556 }],
        0x1d700: [0.452, 0.022, 0.466, { sk: 0.0833 }],
        0x1d701: [0.704, 0.204, 0.438, { ic: 0.033, sk: 0.0833 }],
        0x1d702: [0.442, 0.216, 0.497, { sk: 0.0556 }],
        0x1d703: [0.705, 0.01, 0.469, { sk: 0.0833 }],
        0x1d704: [0.442, 0.01, 0.354, { sk: 0.0556 }],
        0x1d705: [0.442, 0.011, 0.576],
        0x1d706: [0.694, 0.012, 0.583],
        0x1d707: [0.442, 0.216, 0.603, { sk: 0.0278 }],
        0x1d708: [0.442, 0, 0.494, { ic: 0.036, sk: 0.0278 }],
        0x1d709: [0.704, 0.205, 0.438, { sk: 0.111 }],
        0x1d70a: [0.441, 0.011, 0.485, { sk: 0.0556 }],
        0x1d70b: [0.431, 0.011, 0.57],
        0x1d70c: [0.442, 0.216, 0.517, { sk: 0.0833 }],
        0x1d70d: [0.442, 0.107, 0.363, { ic: 0.042, sk: 0.0833 }],
        0x1d70e: [0.431, 0.011, 0.571],
        0x1d70f: [0.431, 0.013, 0.437, { ic: 0.08, sk: 0.0278 }],
        0x1d710: [0.443, 0.01, 0.54, { sk: 0.0278 }],
        0x1d711: [0.442, 0.218, 0.654, { sk: 0.0833 }],
        0x1d712: [0.442, 0.204, 0.626, { sk: 0.0556 }],
        0x1d713: [0.694, 0.205, 0.651, { sk: 0.111 }],
        0x1d714: [0.443, 0.011, 0.622],
        0x1d715: [0.715, 0.022, 0.531, { ic: 0.035, sk: 0.0833 }],
        0x1d716: [0.431, 0.011, 0.406, { sk: 0.0556 }],
        0x1d717: [0.705, 0.011, 0.591, { sk: 0.0833 }],
        0x1d718: [0.434, 0.006, 0.667, { ic: 0.067 }],
        0x1d719: [0.694, 0.205, 0.596, { sk: 0.0833 }],
        0x1d71a: [0.442, 0.194, 0.517, { sk: 0.0833 }],
        0x1d71b: [0.431, 0.01, 0.828],
        0x1d71c: [0.711, 0, 0.869, { sk: 0.16 }],
        0x1d71d: [0.686, 0, 0.866, { sk: 0.0958 }],
        0x1d71e: [0.68, 0, 0.657, { ic: 0.12, sk: 0.0958 }],
        0x1d71f: [0.711, 0, 0.958, { sk: 0.192 }],
        0x1d720: [0.68, 0, 0.81, { ic: 0.015, sk: 0.0958 }],
        0x1d721: [0.686, 0, 0.773, { ic: 0.032, sk: 0.0958 }],
        0x1d722: [0.686, 0, 0.982, { ic: 0.045, sk: 0.0639 }],
        0x1d723: [0.702, 0.017, 0.867, { sk: 0.0958 }],
        0x1d724: [0.686, 0, 0.511, { ic: 0.062, sk: 0.128 }],
        0x1d725: [0.686, 0, 0.971, { ic: 0.032, sk: 0.0639 }],
        0x1d726: [0.711, 0, 0.806, { sk: 0.192 }],
        0x1d727: [0.686, 0, 1.142, { ic: 0.077, sk: 0.0958 }],
        0x1d728: [0.686, 0, 0.95, { ic: 0.077, sk: 0.0958 }],
        0x1d729: [0.675, 0, 0.841, { ic: 0.026, sk: 0.0958 }],
        0x1d72a: [0.703, 0.017, 0.837, { sk: 0.0958 }],
        0x1d72b: [0.68, 0, 0.982, { ic: 0.044, sk: 0.0639 }],
        0x1d72c: [0.686, 0, 0.723, { ic: 0.124, sk: 0.0958 }],
        0x1d72e: [0.686, 0, 0.885, { ic: 0.017, sk: 0.0958 }],
        0x1d72f: [0.675, 0, 0.637, { ic: 0.135, sk: 0.0958 }],
        0x1d730: [0.703, 0, 0.671, { ic: 0.131, sk: 0.0639 }],
        0x1d731: [0.686, 0, 0.767, { sk: 0.0958 }],
        0x1d732: [0.686, 0, 0.947, { sk: 0.0958 }],
        0x1d733: [0.686, 0, 0.714, { ic: 0.076, sk: 0.0639 }],
        0x1d734: [0.703, 0, 0.879, { sk: 0.0958 }],
        0x1d736: [0.452, 0.008, 0.761, { sk: 0.0319 }],
        0x1d737: [0.701, 0.194, 0.66, { sk: 0.0958 }],
        0x1d738: [0.451, 0.211, 0.59, { ic: 0.027 }],
        0x1d739: [0.725, 0.008, 0.522, { sk: 0.0639 }],
        0x1d73a: [0.461, 0.017, 0.529, { sk: 0.0958 }],
        0x1d73b: [0.711, 0.202, 0.508, { ic: 0.013, sk: 0.0958 }],
        0x1d73c: [0.452, 0.211, 0.6, { sk: 0.0639 }],
        0x1d73d: [0.702, 0.008, 0.562, { sk: 0.0958 }],
        0x1d73e: [0.452, 0.008, 0.412, { sk: 0.0639 }],
        0x1d73f: [0.452, 0.008, 0.668],
        0x1d740: [0.694, 0.013, 0.671],
        0x1d741: [0.452, 0.211, 0.708, { sk: 0.0319 }],
        0x1d742: [0.452, 0, 0.577, { ic: 0.031, sk: 0.0319 }],
        0x1d743: [0.711, 0.201, 0.508, { sk: 0.128 }],
        0x1d744: [0.452, 0.008, 0.585, { sk: 0.0639 }],
        0x1d745: [0.444, 0.008, 0.682],
        0x1d746: [0.451, 0.211, 0.612, { sk: 0.0958 }],
        0x1d747: [0.451, 0.105, 0.424, { ic: 0.033, sk: 0.0958 }],
        0x1d748: [0.444, 0.008, 0.686],
        0x1d749: [0.444, 0.013, 0.521, { ic: 0.089, sk: 0.0319 }],
        0x1d74a: [0.453, 0.008, 0.631, { sk: 0.0319 }],
        0x1d74b: [0.452, 0.216, 0.747, { sk: 0.0958 }],
        0x1d74c: [0.452, 0.201, 0.718, { sk: 0.0639 }],
        0x1d74d: [0.694, 0.202, 0.758, { sk: 0.128 }],
        0x1d74e: [0.453, 0.008, 0.718],
        0x1d74f: [0.71, 0.017, 0.628, { ic: 0.029, sk: 0.0958 }],
        0x1d750: [0.444, 0.007, 0.483, { sk: 0.0639 }],
        0x1d751: [0.701, 0.008, 0.692, { sk: 0.0958 }],
        0x1d752: [0.434, 0.006, 0.667, { ic: 0.067 }],
        0x1d753: [0.694, 0.202, 0.712, { sk: 0.0958 }],
        0x1d754: [0.451, 0.194, 0.612, { sk: 0.0958 }],
        0x1d755: [0.444, 0.008, 0.975],
        0x1d756: [0.694, 0, 0.733],
        0x1d757: [0.694, 0, 0.733],
        0x1d758: [0.691, 0, 0.581],
        0x1d759: [0.694, 0, 0.917],
        0x1d75a: [0.691, 0, 0.642],
        0x1d75b: [0.694, 0, 0.672],
        0x1d75c: [0.694, 0, 0.794],
        0x1d75d: [0.716, 0.022, 0.856],
        0x1d75e: [0.694, 0, 0.331],
        0x1d75f: [0.694, 0, 0.764],
        0x1d760: [0.694, 0, 0.672],
        0x1d761: [0.694, 0, 0.978],
        0x1d762: [0.694, 0, 0.794],
        0x1d763: [0.688, 0, 0.733],
        0x1d764: [0.716, 0.022, 0.794],
        0x1d765: [0.691, 0, 0.794],
        0x1d766: [0.694, 0, 0.703],
        0x1d768: [0.694, 0, 0.794],
        0x1d769: [0.688, 0, 0.733],
        0x1d76a: [0.715, 0, 0.856],
        0x1d76b: [0.694, 0, 0.794],
        0x1d76c: [0.694, 0, 0.733],
        0x1d76d: [0.694, 0, 0.856],
        0x1d76e: [0.716, 0, 0.794],
        0x1d7ce: [0.654, 0.01, 0.575],
        0x1d7cf: [0.655, 0, 0.575],
        0x1d7d0: [0.654, 0, 0.575],
        0x1d7d1: [0.655, 0.011, 0.575],
        0x1d7d2: [0.656, 0, 0.575],
        0x1d7d3: [0.655, 0.011, 0.575],
        0x1d7d4: [0.655, 0.011, 0.575],
        0x1d7d5: [0.676, 0.011, 0.575],
        0x1d7d6: [0.654, 0.011, 0.575],
        0x1d7d7: [0.654, 0.011, 0.575],
        0x1d7e2: [0.678, 0.022, 0.5],
        0x1d7e3: [0.678, 0, 0.5],
        0x1d7e4: [0.677, 0, 0.5],
        0x1d7e5: [0.678, 0.022, 0.5],
        0x1d7e6: [0.656, 0, 0.5],
        0x1d7e7: [0.656, 0.021, 0.5],
        0x1d7e8: [0.677, 0.022, 0.5],
        0x1d7e9: [0.656, 0.011, 0.5],
        0x1d7ea: [0.678, 0.022, 0.5],
        0x1d7eb: [0.677, 0.022, 0.5],
        0x1d7ec: [0.715, 0.022, 0.55],
        0x1d7ed: [0.716, 0, 0.55],
        0x1d7ee: [0.716, 0, 0.55],
        0x1d7ef: [0.716, 0.022, 0.55],
        0x1d7f0: [0.694, 0, 0.55],
        0x1d7f1: [0.694, 0.022, 0.55],
        0x1d7f2: [0.716, 0.022, 0.55],
        0x1d7f3: [0.695, 0.011, 0.55],
        0x1d7f4: [0.715, 0.022, 0.55],
        0x1d7f5: [0.716, 0.022, 0.55],
        0x1d7f6: [0.621, 0.01, 0.525],
        0x1d7f7: [0.622, 0, 0.525],
        0x1d7f8: [0.622, 0, 0.525],
        0x1d7f9: [0.622, 0.011, 0.525],
        0x1d7fa: [0.624, 0, 0.525],
        0x1d7fb: [0.611, 0.01, 0.525],
        0x1d7fc: [0.622, 0.011, 0.525],
        0x1d7fd: [0.627, 0.01, 0.525],
        0x1d7fe: [0.621, 0.01, 0.525],
        0x1d7ff: [0.622, 0.011, 0.525]
      };
      //# sourceMappingURL=normal.js.map

      /***/
    },

    /***/ 47033: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifBoldItalic = void 0;
      exports.sansSerifBoldItalic = {
        0x131: [0.458, 0, 0.256],
        0x237: [0.458, 0.205, 0.286]
      };
      //# sourceMappingURL=sans-serif-bold-italic.js.map

      /***/
    },

    /***/ 94872: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifBold = void 0;
      exports.sansSerifBold = {
        0x21: [0.694, 0, 0.367],
        0x22: [0.694, -0.442, 0.558],
        0x23: [0.694, 0.193, 0.917],
        0x24: [0.75, 0.056, 0.55],
        0x25: [0.75, 0.056, 1.029],
        0x26: [0.716, 0.022, 0.831],
        0x27: [0.694, -0.442, 0.306],
        0x28: [0.75, 0.249, 0.428],
        0x29: [0.75, 0.25, 0.428],
        0x2a: [0.75, -0.293, 0.55],
        0x2b: [0.617, 0.116, 0.856],
        0x2c: [0.146, 0.106, 0.306],
        0x2d: [0.273, -0.186, 0.367],
        0x2e: [0.146, 0, 0.306],
        0x2f: [0.75, 0.249, 0.55],
        0x3a: [0.458, 0, 0.306],
        0x3b: [0.458, 0.106, 0.306],
        0x3d: [0.407, -0.094, 0.856],
        0x3f: [0.705, 0, 0.519],
        0x40: [0.704, 0.011, 0.733],
        0x5b: [0.75, 0.25, 0.343],
        0x5d: [0.75, 0.25, 0.343],
        0x5e: [0.694, -0.537, 0.55],
        0x5f: [-0.023, 0.11, 0.55],
        0x7e: [0.344, -0.198, 0.55],
        0x131: [0.458, 0, 0.256],
        0x237: [0.458, 0.205, 0.286],
        0x300: [0.694, -0.537, 0],
        0x301: [0.694, -0.537, 0],
        0x302: [0.694, -0.537, 0],
        0x303: [0.694, -0.548, 0],
        0x304: [0.66, -0.56, 0],
        0x306: [0.694, -0.552, 0],
        0x307: [0.695, -0.596, 0],
        0x308: [0.695, -0.595, 0],
        0x30a: [0.694, -0.538, 0],
        0x30b: [0.694, -0.537, 0],
        0x30c: [0.657, -0.5, 0],
        0x2013: [0.327, -0.24, 0.55],
        0x2014: [0.327, -0.24, 1.1],
        0x2015: [0.327, -0.24, 1.1],
        0x2017: [-0.023, 0.11, 0.55],
        0x2018: [0.694, -0.443, 0.306],
        0x2019: [0.694, -0.442, 0.306],
        0x201c: [0.694, -0.443, 0.558],
        0x201d: [0.694, -0.442, 0.558],
        0x2044: [0.75, 0.249, 0.55],
        0x2206: [0.694, 0, 0.917]
      };
      //# sourceMappingURL=sans-serif-bold.js.map

      /***/
    },

    /***/ 9255: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerifItalic = void 0;
      exports.sansSerifItalic = {
        0x21: [0.694, 0, 0.319, { ic: 0.036 }],
        0x22: [0.694, -0.471, 0.5],
        0x23: [0.694, 0.194, 0.833, { ic: 0.018 }],
        0x24: [0.75, 0.056, 0.5, { ic: 0.065 }],
        0x25: [0.75, 0.056, 0.833],
        0x26: [0.716, 0.022, 0.758],
        0x27: [0.694, -0.471, 0.278, { ic: 0.057 }],
        0x28: [0.75, 0.25, 0.389, { ic: 0.102 }],
        0x29: [0.75, 0.25, 0.389],
        0x2a: [0.75, -0.306, 0.5, { ic: 0.068 }],
        0x2b: [0.583, 0.083, 0.778],
        0x2c: [0.098, 0.125, 0.278],
        0x2d: [0.259, -0.186, 0.333],
        0x2e: [0.098, 0, 0.278],
        0x2f: [0.75, 0.25, 0.5, { ic: 0.1 }],
        0x30: [0.678, 0.022, 0.5, { ic: 0.049 }],
        0x31: [0.678, 0, 0.5],
        0x32: [0.678, 0, 0.5, { ic: 0.051 }],
        0x33: [0.678, 0.022, 0.5, { ic: 0.044 }],
        0x34: [0.656, 0, 0.5, { ic: 0.021 }],
        0x35: [0.656, 0.022, 0.5, { ic: 0.055 }],
        0x36: [0.678, 0.022, 0.5, { ic: 0.048 }],
        0x37: [0.656, 0.011, 0.5, { ic: 0.096 }],
        0x38: [0.678, 0.022, 0.5, { ic: 0.054 }],
        0x39: [0.677, 0.022, 0.5, { ic: 0.045 }],
        0x3a: [0.444, 0, 0.278],
        0x3b: [0.444, 0.125, 0.278],
        0x3d: [0.37, -0.13, 0.778, { ic: 0.018 }],
        0x3f: [0.704, 0, 0.472, { ic: 0.064 }],
        0x40: [0.705, 0.01, 0.667, { ic: 0.04 }],
        0x5b: [0.75, 0.25, 0.289, { ic: 0.136 }],
        0x5d: [0.75, 0.25, 0.289, { ic: 0.064 }],
        0x5e: [0.694, -0.527, 0.5, { ic: 0.033 }],
        0x5f: [-0.038, 0.114, 0.5, { ic: 0.065 }],
        0x7e: [0.327, -0.193, 0.5, { ic: 0.06 }],
        0x131: [0.444, 0, 0.239, { ic: 0.019 }],
        0x237: [0.444, 0.204, 0.267, { ic: 0.019 }],
        0x300: [0.694, -0.527, 0],
        0x301: [0.694, -0.527, 0, { ic: 0.063 }],
        0x302: [0.694, -0.527, 0, { ic: 0.033 }],
        0x303: [0.677, -0.543, 0, { ic: 0.06 }],
        0x304: [0.631, -0.552, 0, { ic: 0.064 }],
        0x306: [0.694, -0.508, 0, { ic: 0.073 }],
        0x307: [0.68, -0.576, 0],
        0x308: [0.68, -0.582, 0, { ic: 0.04 }],
        0x30a: [0.693, -0.527, 0],
        0x30b: [0.694, -0.527, 0, { ic: 0.063 }],
        0x30c: [0.654, -0.487, 0, { ic: 0.06 }],
        0x391: [0.694, 0, 0.667],
        0x392: [0.694, 0, 0.667, { ic: 0.029 }],
        0x393: [0.691, 0, 0.542, { ic: 0.104 }],
        0x394: [0.694, 0, 0.833],
        0x395: [0.691, 0, 0.597, { ic: 0.091 }],
        0x396: [0.694, 0, 0.611, { ic: 0.091 }],
        0x397: [0.694, 0, 0.708, { ic: 0.06 }],
        0x398: [0.715, 0.022, 0.778, { ic: 0.026 }],
        0x399: [0.694, 0, 0.278, { ic: 0.06 }],
        0x39a: [0.694, 0, 0.694, { ic: 0.091 }],
        0x39b: [0.694, 0, 0.611],
        0x39c: [0.694, 0, 0.875, { ic: 0.054 }],
        0x39d: [0.694, 0, 0.708, { ic: 0.058 }],
        0x39e: [0.688, 0, 0.667, { ic: 0.098 }],
        0x39f: [0.716, 0.022, 0.736, { ic: 0.027 }],
        0x3a0: [0.691, 0, 0.708, { ic: 0.06 }],
        0x3a1: [0.694, 0, 0.639, { ic: 0.051 }],
        0x3a3: [0.694, 0, 0.722, { ic: 0.091 }],
        0x3a4: [0.688, 0, 0.681, { ic: 0.109 }],
        0x3a5: [0.716, 0, 0.778, { ic: 0.065 }],
        0x3a6: [0.694, 0, 0.722, { ic: 0.021 }],
        0x3a7: [0.694, 0, 0.667, { ic: 0.091 }],
        0x3a8: [0.694, 0, 0.778, { ic: 0.076 }],
        0x3a9: [0.716, 0, 0.722, { ic: 0.047 }],
        0x2013: [0.312, -0.236, 0.5, { ic: 0.065 }],
        0x2014: [0.312, -0.236, 1, { ic: 0.065 }],
        0x2015: [0.312, -0.236, 1, { ic: 0.065 }],
        0x2017: [-0.038, 0.114, 0.5, { ic: 0.065 }],
        0x2018: [0.694, -0.471, 0.278, { ic: 0.058 }],
        0x2019: [0.694, -0.471, 0.278, { ic: 0.057 }],
        0x201c: [0.694, -0.471, 0.5, { ic: 0.114 }],
        0x201d: [0.694, -0.471, 0.5],
        0x2044: [0.75, 0.25, 0.5, { ic: 0.1 }],
        0x2206: [0.694, 0, 0.833]
      };
      //# sourceMappingURL=sans-serif-italic.js.map

      /***/
    },

    /***/ 83366: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.sansSerif = void 0;
      exports.sansSerif = {
        0x21: [0.694, 0, 0.319],
        0x22: [0.694, -0.471, 0.5],
        0x23: [0.694, 0.194, 0.833],
        0x24: [0.75, 0.056, 0.5],
        0x25: [0.75, 0.056, 0.833],
        0x26: [0.716, 0.022, 0.758],
        0x27: [0.694, -0.471, 0.278],
        0x28: [0.75, 0.25, 0.389],
        0x29: [0.75, 0.25, 0.389],
        0x2a: [0.75, -0.306, 0.5],
        0x2b: [0.583, 0.082, 0.778],
        0x2c: [0.098, 0.125, 0.278],
        0x2d: [0.259, -0.186, 0.333],
        0x2e: [0.098, 0, 0.278],
        0x2f: [0.75, 0.25, 0.5],
        0x3a: [0.444, 0, 0.278],
        0x3b: [0.444, 0.125, 0.278],
        0x3d: [0.37, -0.13, 0.778],
        0x3f: [0.704, 0, 0.472],
        0x40: [0.704, 0.011, 0.667],
        0x5b: [0.75, 0.25, 0.289],
        0x5d: [0.75, 0.25, 0.289],
        0x5e: [0.694, -0.527, 0.5],
        0x5f: [-0.038, 0.114, 0.5],
        0x7e: [0.327, -0.193, 0.5],
        0x131: [0.444, 0, 0.239],
        0x237: [0.444, 0.205, 0.267],
        0x300: [0.694, -0.527, 0],
        0x301: [0.694, -0.527, 0],
        0x302: [0.694, -0.527, 0],
        0x303: [0.677, -0.543, 0],
        0x304: [0.631, -0.552, 0],
        0x306: [0.694, -0.508, 0],
        0x307: [0.68, -0.576, 0],
        0x308: [0.68, -0.582, 0],
        0x30a: [0.694, -0.527, 0],
        0x30b: [0.694, -0.527, 0],
        0x30c: [0.654, -0.487, 0],
        0x391: [0.694, 0, 0.667],
        0x392: [0.694, 0, 0.667],
        0x393: [0.691, 0, 0.542],
        0x394: [0.694, 0, 0.833],
        0x395: [0.691, 0, 0.597],
        0x396: [0.694, 0, 0.611],
        0x397: [0.694, 0, 0.708],
        0x398: [0.716, 0.021, 0.778],
        0x399: [0.694, 0, 0.278],
        0x39a: [0.694, 0, 0.694],
        0x39b: [0.694, 0, 0.611],
        0x39c: [0.694, 0, 0.875],
        0x39d: [0.694, 0, 0.708],
        0x39e: [0.688, 0, 0.667],
        0x39f: [0.715, 0.022, 0.736],
        0x3a0: [0.691, 0, 0.708],
        0x3a1: [0.694, 0, 0.639],
        0x3a3: [0.694, 0, 0.722],
        0x3a4: [0.688, 0, 0.681],
        0x3a5: [0.716, 0, 0.778],
        0x3a6: [0.694, 0, 0.722],
        0x3a7: [0.694, 0, 0.667],
        0x3a8: [0.694, 0, 0.778],
        0x3a9: [0.716, 0, 0.722],
        0x2013: [0.312, -0.236, 0.5],
        0x2014: [0.312, -0.236, 1],
        0x2015: [0.312, -0.236, 1],
        0x2017: [-0.038, 0.114, 0.5],
        0x2018: [0.694, -0.471, 0.278],
        0x2019: [0.694, -0.471, 0.278],
        0x201c: [0.694, -0.471, 0.5],
        0x201d: [0.694, -0.471, 0.5],
        0x2044: [0.75, 0.25, 0.5],
        0x2206: [0.694, 0, 0.833]
      };
      //# sourceMappingURL=sans-serif.js.map

      /***/
    },

    /***/ 21616: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.scriptBold = void 0;
      exports.scriptBold = {};
      //# sourceMappingURL=script-bold.js.map

      /***/
    },

    /***/ 24062: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.script = void 0;
      exports.script = {};
      //# sourceMappingURL=script.js.map

      /***/
    },

    /***/ 22578: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.smallop = void 0;
      exports.smallop = {
        0x28: [0.85, 0.349, 0.458],
        0x29: [0.85, 0.349, 0.458],
        0x2f: [0.85, 0.349, 0.578],
        0x5b: [0.85, 0.349, 0.417],
        0x5c: [0.85, 0.349, 0.578],
        0x5d: [0.85, 0.349, 0.417],
        0x7b: [0.85, 0.349, 0.583],
        0x7d: [0.85, 0.349, 0.583],
        0x2c6: [0.744, -0.551, 0.556],
        0x2dc: [0.722, -0.597, 0.556],
        0x302: [0.744, -0.551, 0],
        0x303: [0.722, -0.597, 0],
        0x2016: [0.602, 0, 0.778],
        0x2044: [0.85, 0.349, 0.578],
        0x2191: [0.6, 0, 0.667],
        0x2193: [0.6, 0, 0.667],
        0x21d1: [0.599, 0, 0.778],
        0x21d3: [0.6, 0, 0.778],
        0x220f: [0.75, 0.25, 0.944],
        0x2210: [0.75, 0.25, 0.944],
        0x2211: [0.75, 0.25, 1.056],
        0x221a: [0.85, 0.35, 1, { ic: 0.02 }],
        0x2223: [0.627, 0.015, 0.333],
        0x2225: [0.627, 0.015, 0.556],
        0x222b: [0.805, 0.306, 0.472, { ic: 0.138 }],
        0x222c: [0.805, 0.306, 0.819, { ic: 0.138 }],
        0x222d: [0.805, 0.306, 1.166, { ic: 0.138 }],
        0x222e: [0.805, 0.306, 0.472, { ic: 0.138 }],
        0x22c0: [0.75, 0.249, 0.833],
        0x22c1: [0.75, 0.249, 0.833],
        0x22c2: [0.75, 0.249, 0.833],
        0x22c3: [0.75, 0.249, 0.833],
        0x2308: [0.85, 0.349, 0.472],
        0x2309: [0.85, 0.349, 0.472],
        0x230a: [0.85, 0.349, 0.472],
        0x230b: [0.85, 0.349, 0.472],
        0x2329: [0.85, 0.35, 0.472],
        0x232a: [0.85, 0.35, 0.472],
        0x23d0: [0.602, 0, 0.667],
        0x2758: [0.627, 0.015, 0.333],
        0x27e8: [0.85, 0.35, 0.472],
        0x27e9: [0.85, 0.35, 0.472],
        0x2a00: [0.75, 0.25, 1.111],
        0x2a01: [0.75, 0.25, 1.111],
        0x2a02: [0.75, 0.25, 1.111],
        0x2a04: [0.75, 0.249, 0.833],
        0x2a06: [0.75, 0.249, 0.833],
        0x2a0c: [0.805, 0.306, 1.638, { ic: 0.138 }],
        0x3008: [0.85, 0.35, 0.472],
        0x3009: [0.85, 0.35, 0.472]
      };
      //# sourceMappingURL=smallop.js.map

      /***/
    },

    /***/ 70286: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texCalligraphicBold = void 0;
      exports.texCalligraphicBold = {
        0x41: [0.751, 0.049, 0.921, { ic: 0.068, sk: 0.224 }],
        0x42: [0.705, 0.017, 0.748, { sk: 0.16 }],
        0x43: [0.703, 0.02, 0.613, { sk: 0.16 }],
        0x44: [0.686, 0, 0.892, { sk: 0.0958 }],
        0x45: [0.703, 0.016, 0.607, { ic: 0.02, sk: 0.128 }],
        0x46: [0.686, 0.03, 0.814, { ic: 0.116, sk: 0.128 }],
        0x47: [0.703, 0.113, 0.682, { sk: 0.128 }],
        0x48: [0.686, 0.048, 0.987, { sk: 0.128 }],
        0x49: [0.686, 0, 0.642, { ic: 0.104, sk: 0.0319 }],
        0x4a: [0.686, 0.114, 0.779, { ic: 0.158, sk: 0.192 }],
        0x4b: [0.703, 0.017, 0.871, { sk: 0.0639 }],
        0x4c: [0.703, 0.017, 0.788, { sk: 0.16 }],
        0x4d: [0.703, 0.049, 1.378, { sk: 0.16 }],
        0x4e: [0.84, 0.049, 0.937, { ic: 0.168, sk: 0.0958 }],
        0x4f: [0.703, 0.017, 0.906, { sk: 0.128 }],
        0x50: [0.686, 0.067, 0.81, { ic: 0.036, sk: 0.0958 }],
        0x51: [0.703, 0.146, 0.939, { sk: 0.128 }],
        0x52: [0.686, 0.017, 0.99, { sk: 0.0958 }],
        0x53: [0.703, 0.016, 0.696, { ic: 0.025, sk: 0.16 }],
        0x54: [0.72, 0.069, 0.644, { ic: 0.303, sk: 0.0319 }],
        0x55: [0.686, 0.024, 0.715, { ic: 0.056, sk: 0.0958 }],
        0x56: [0.686, 0.077, 0.737, { ic: 0.037, sk: 0.0319 }],
        0x57: [0.686, 0.077, 1.169, { ic: 0.037, sk: 0.0958 }],
        0x58: [0.686, 0, 0.817, { ic: 0.089, sk: 0.16 }],
        0x59: [0.686, 0.164, 0.759, { ic: 0.038, sk: 0.0958 }],
        0x5a: [0.686, 0, 0.818, { ic: 0.035, sk: 0.16 }],
        0x131: [0.452, 0.008, 0.394, { sk: 0.0319 }],
        0x237: [0.451, 0.201, 0.439, { sk: 0.0958 }]
      };
      //# sourceMappingURL=tex-calligraphic-bold.js.map

      /***/
    },

    /***/ 57552: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texCalligraphic = void 0;
      exports.texCalligraphic = {
        0x41: [0.728, 0.05, 0.798, { ic: 0.021, sk: 0.194 }],
        0x42: [0.705, 0.022, 0.657, { sk: 0.139 }],
        0x43: [0.705, 0.025, 0.527, { sk: 0.139 }],
        0x44: [0.683, 0, 0.771, { sk: 0.0833 }],
        0x45: [0.705, 0.022, 0.528, { ic: 0.036, sk: 0.111 }],
        0x46: [0.683, 0.032, 0.719, { ic: 0.11, sk: 0.111 }],
        0x47: [0.704, 0.119, 0.595, { sk: 0.111 }],
        0x48: [0.683, 0.048, 0.845, { sk: 0.111 }],
        0x49: [0.683, 0, 0.545, { ic: 0.097, sk: 0.0278 }],
        0x4a: [0.683, 0.119, 0.678, { ic: 0.161, sk: 0.167 }],
        0x4b: [0.705, 0.022, 0.762, { sk: 0.0556 }],
        0x4c: [0.705, 0.022, 0.69, { sk: 0.139 }],
        0x4d: [0.705, 0.05, 1.201, { sk: 0.139 }],
        0x4e: [0.789, 0.05, 0.82, { ic: 0.159, sk: 0.0833 }],
        0x4f: [0.705, 0.022, 0.796, { sk: 0.111 }],
        0x50: [0.683, 0.057, 0.696, { ic: 0.037, sk: 0.0833 }],
        0x51: [0.705, 0.131, 0.817, { sk: 0.111 }],
        0x52: [0.682, 0.022, 0.848, { sk: 0.0833 }],
        0x53: [0.705, 0.022, 0.606, { ic: 0.036, sk: 0.139 }],
        0x54: [0.717, 0.068, 0.545, { ic: 0.288, sk: 0.0278 }],
        0x55: [0.683, 0.028, 0.626, { ic: 0.061, sk: 0.0833 }],
        0x56: [0.683, 0.052, 0.613, { ic: 0.045, sk: 0.0278 }],
        0x57: [0.683, 0.053, 0.988, { ic: 0.046, sk: 0.0833 }],
        0x58: [0.683, 0, 0.713, { ic: 0.094, sk: 0.139 }],
        0x59: [0.683, 0.143, 0.668, { ic: 0.046, sk: 0.0833 }],
        0x5a: [0.683, 0, 0.725, { ic: 0.042, sk: 0.139 }]
      };
      //# sourceMappingURL=tex-calligraphic.js.map

      /***/
    },

    /***/ 24398: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texMathit = void 0;
      exports.texMathit = {
        0x41: [0.716, 0, 0.743],
        0x42: [0.683, 0, 0.704],
        0x43: [0.705, 0.021, 0.716],
        0x44: [0.683, 0, 0.755],
        0x45: [0.68, 0, 0.678],
        0x46: [0.68, 0, 0.653],
        0x47: [0.705, 0.022, 0.774],
        0x48: [0.683, 0, 0.743],
        0x49: [0.683, 0, 0.386],
        0x4a: [0.683, 0.021, 0.525],
        0x4b: [0.683, 0, 0.769],
        0x4c: [0.683, 0, 0.627],
        0x4d: [0.683, 0, 0.897],
        0x4e: [0.683, 0, 0.743],
        0x4f: [0.704, 0.022, 0.767],
        0x50: [0.683, 0, 0.678],
        0x51: [0.704, 0.194, 0.767],
        0x52: [0.683, 0.022, 0.729],
        0x53: [0.705, 0.022, 0.562],
        0x54: [0.677, 0, 0.716],
        0x55: [0.683, 0.022, 0.743],
        0x56: [0.683, 0.022, 0.743],
        0x57: [0.683, 0.022, 0.999],
        0x58: [0.683, 0, 0.743],
        0x59: [0.683, 0, 0.743],
        0x5a: [0.683, 0, 0.613],
        0x61: [0.442, 0.011, 0.511],
        0x62: [0.694, 0.011, 0.46],
        0x63: [0.441, 0.01, 0.46],
        0x64: [0.694, 0.011, 0.511],
        0x65: [0.442, 0.01, 0.46],
        0x66: [0.705, 0.204, 0.307],
        0x67: [0.442, 0.205, 0.46],
        0x68: [0.694, 0.011, 0.511],
        0x69: [0.656, 0.01, 0.307],
        0x6a: [0.656, 0.204, 0.307],
        0x6b: [0.694, 0.011, 0.46],
        0x6c: [0.694, 0.011, 0.256],
        0x6d: [0.442, 0.011, 0.818],
        0x6e: [0.442, 0.011, 0.562],
        0x6f: [0.442, 0.011, 0.511],
        0x70: [0.442, 0.194, 0.511],
        0x71: [0.442, 0.194, 0.46],
        0x72: [0.442, 0.011, 0.422],
        0x73: [0.442, 0.011, 0.409],
        0x74: [0.626, 0.011, 0.332],
        0x75: [0.441, 0.011, 0.537],
        0x76: [0.443, 0.01, 0.46],
        0x77: [0.443, 0.011, 0.664],
        0x78: [0.442, 0.011, 0.464],
        0x79: [0.441, 0.205, 0.486],
        0x7a: [0.442, 0.011, 0.409]
      };
      //# sourceMappingURL=tex-mathit.js.map

      /***/
    },

    /***/ 20628: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texOldstyleBold = void 0;
      exports.texOldstyleBold = {
        0x30: [0.46, 0.017, 0.575],
        0x31: [0.461, 0, 0.575],
        0x32: [0.46, 0, 0.575],
        0x33: [0.461, 0.211, 0.575],
        0x34: [0.469, 0.194, 0.575],
        0x35: [0.461, 0.211, 0.575],
        0x36: [0.66, 0.017, 0.575],
        0x37: [0.476, 0.211, 0.575],
        0x38: [0.661, 0.017, 0.575],
        0x39: [0.461, 0.21, 0.575],
        0x41: [0.751, 0.049, 0.921, { ic: 0.068, sk: 0.224 }],
        0x42: [0.705, 0.017, 0.748, { sk: 0.16 }],
        0x43: [0.703, 0.02, 0.613, { sk: 0.16 }],
        0x44: [0.686, 0, 0.892, { sk: 0.0958 }],
        0x45: [0.703, 0.016, 0.607, { ic: 0.02, sk: 0.128 }],
        0x46: [0.686, 0.03, 0.814, { ic: 0.116, sk: 0.128 }],
        0x47: [0.703, 0.113, 0.682, { sk: 0.128 }],
        0x48: [0.686, 0.048, 0.987, { sk: 0.128 }],
        0x49: [0.686, 0, 0.642, { ic: 0.104, sk: 0.0319 }],
        0x4a: [0.686, 0.114, 0.779, { ic: 0.158, sk: 0.192 }],
        0x4b: [0.703, 0.017, 0.871, { sk: 0.0639 }],
        0x4c: [0.703, 0.017, 0.788, { sk: 0.16 }],
        0x4d: [0.703, 0.049, 1.378, { sk: 0.16 }],
        0x4e: [0.84, 0.049, 0.937, { ic: 0.168, sk: 0.0958 }],
        0x4f: [0.703, 0.017, 0.906, { sk: 0.128 }],
        0x50: [0.686, 0.067, 0.81, { ic: 0.036, sk: 0.0958 }],
        0x51: [0.703, 0.146, 0.939, { sk: 0.128 }],
        0x52: [0.686, 0.017, 0.99, { sk: 0.0958 }],
        0x53: [0.703, 0.016, 0.696, { ic: 0.025, sk: 0.16 }],
        0x54: [0.72, 0.069, 0.644, { ic: 0.303, sk: 0.0319 }],
        0x55: [0.686, 0.024, 0.715, { ic: 0.056, sk: 0.0958 }],
        0x56: [0.686, 0.077, 0.737, { ic: 0.037, sk: 0.0319 }],
        0x57: [0.686, 0.077, 1.169, { ic: 0.037, sk: 0.0958 }],
        0x58: [0.686, 0, 0.817, { ic: 0.089, sk: 0.16 }],
        0x59: [0.686, 0.164, 0.759, { ic: 0.038, sk: 0.0958 }],
        0x5a: [0.686, 0, 0.818, { ic: 0.035, sk: 0.16 }]
      };
      //# sourceMappingURL=tex-oldstyle-bold.js.map

      /***/
    },

    /***/ 41855: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texOldstyle = void 0;
      exports.texOldstyle = {
        0x30: [0.452, 0.022, 0.5],
        0x31: [0.453, 0, 0.5],
        0x32: [0.453, 0, 0.5],
        0x33: [0.452, 0.216, 0.5],
        0x34: [0.464, 0.194, 0.5],
        0x35: [0.453, 0.216, 0.5],
        0x36: [0.665, 0.022, 0.5],
        0x37: [0.463, 0.216, 0.5],
        0x38: [0.666, 0.021, 0.5],
        0x39: [0.453, 0.216, 0.5],
        0x41: [0.728, 0.05, 0.798, { ic: 0.021, sk: 0.194 }],
        0x42: [0.705, 0.022, 0.657, { sk: 0.139 }],
        0x43: [0.705, 0.025, 0.527, { sk: 0.139 }],
        0x44: [0.683, 0, 0.771, { sk: 0.0833 }],
        0x45: [0.705, 0.022, 0.528, { ic: 0.036, sk: 0.111 }],
        0x46: [0.683, 0.032, 0.719, { ic: 0.11, sk: 0.111 }],
        0x47: [0.704, 0.119, 0.595, { sk: 0.111 }],
        0x48: [0.683, 0.048, 0.845, { sk: 0.111 }],
        0x49: [0.683, 0, 0.545, { ic: 0.097, sk: 0.0278 }],
        0x4a: [0.683, 0.119, 0.678, { ic: 0.161, sk: 0.167 }],
        0x4b: [0.705, 0.022, 0.762, { sk: 0.0556 }],
        0x4c: [0.705, 0.022, 0.69, { sk: 0.139 }],
        0x4d: [0.705, 0.05, 1.201, { sk: 0.139 }],
        0x4e: [0.789, 0.05, 0.82, { ic: 0.159, sk: 0.0833 }],
        0x4f: [0.705, 0.022, 0.796, { sk: 0.111 }],
        0x50: [0.683, 0.057, 0.696, { ic: 0.037, sk: 0.0833 }],
        0x51: [0.705, 0.131, 0.817, { sk: 0.111 }],
        0x52: [0.682, 0.022, 0.848, { sk: 0.0833 }],
        0x53: [0.705, 0.022, 0.606, { ic: 0.036, sk: 0.139 }],
        0x54: [0.717, 0.068, 0.545, { ic: 0.288, sk: 0.0278 }],
        0x55: [0.683, 0.028, 0.626, { ic: 0.061, sk: 0.0833 }],
        0x56: [0.683, 0.052, 0.613, { ic: 0.045, sk: 0.0278 }],
        0x57: [0.683, 0.053, 0.988, { ic: 0.046, sk: 0.0833 }],
        0x58: [0.683, 0, 0.713, { ic: 0.094, sk: 0.139 }],
        0x59: [0.683, 0.143, 0.668, { ic: 0.046, sk: 0.0833 }],
        0x5a: [0.683, 0, 0.725, { ic: 0.042, sk: 0.139 }]
      };
      //# sourceMappingURL=tex-oldstyle.js.map

      /***/
    },

    /***/ 75431: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texSize3 = void 0;
      exports.texSize3 = {
        0x28: [1.45, 0.949, 0.736],
        0x29: [1.45, 0.949, 0.736],
        0x2f: [1.45, 0.949, 1.044],
        0x5b: [1.45, 0.949, 0.528],
        0x5c: [1.45, 0.949, 1.044],
        0x5d: [1.45, 0.949, 0.528],
        0x7b: [1.45, 0.949, 0.75],
        0x7d: [1.45, 0.949, 0.75],
        0x2c6: [0.772, -0.564, 1.444],
        0x2dc: [0.749, -0.61, 1.444],
        0x302: [0.772, -0.564, 0],
        0x303: [0.749, -0.61, 0],
        0x2044: [1.45, 0.949, 1.044],
        0x221a: [1.45, 0.95, 1, { ic: 0.02 }],
        0x2308: [1.45, 0.949, 0.583],
        0x2309: [1.45, 0.949, 0.583],
        0x230a: [1.45, 0.949, 0.583],
        0x230b: [1.45, 0.949, 0.583],
        0x2329: [1.45, 0.95, 0.75],
        0x232a: [1.45, 0.949, 0.75],
        0x27e8: [1.45, 0.95, 0.75],
        0x27e9: [1.45, 0.949, 0.75],
        0x3008: [1.45, 0.95, 0.75],
        0x3009: [1.45, 0.949, 0.75]
      };
      //# sourceMappingURL=tex-size3.js.map

      /***/
    },

    /***/ 98278: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texSize4 = void 0;
      exports.texSize4 = {
        0x28: [1.75, 1.249, 0.792],
        0x29: [1.75, 1.249, 0.792],
        0x2f: [1.75, 1.249, 1.278],
        0x5b: [1.75, 1.249, 0.583],
        0x5c: [1.75, 1.249, 1.278],
        0x5d: [1.75, 1.249, 0.583],
        0x7b: [1.75, 1.249, 0.806],
        0x7d: [1.75, 1.249, 0.806],
        0x2c6: [0.845, -0.561, 1.889, { ic: 0.013 }],
        0x2dc: [0.823, -0.583, 1.889],
        0x302: [0.845, -0.561, 0, { ic: 0.013 }],
        0x303: [0.823, -0.583, 0],
        0x2044: [1.75, 1.249, 1.278],
        0x221a: [1.75, 1.25, 1, { ic: 0.02 }],
        0x2308: [1.75, 1.249, 0.639],
        0x2309: [1.75, 1.249, 0.639],
        0x230a: [1.75, 1.249, 0.639],
        0x230b: [1.75, 1.249, 0.639],
        0x2329: [1.75, 1.248, 0.806],
        0x232a: [1.75, 1.248, 0.806],
        0x239b: [1.154, 0.655, 0.875],
        0x239c: [0.61, 0.01, 0.875],
        0x239d: [1.165, 0.644, 0.875],
        0x239e: [1.154, 0.655, 0.875],
        0x239f: [0.61, 0.01, 0.875],
        0x23a0: [1.165, 0.644, 0.875],
        0x23a1: [1.154, 0.645, 0.667],
        0x23a2: [0.602, 0, 0.667],
        0x23a3: [1.155, 0.644, 0.667],
        0x23a4: [1.154, 0.645, 0.667],
        0x23a5: [0.602, 0, 0.667],
        0x23a6: [1.155, 0.644, 0.667],
        0x23a7: [0.899, 0.01, 0.889],
        0x23a8: [1.16, 0.66, 0.889],
        0x23a9: [0.01, 0.899, 0.889],
        0x23aa: [0.29, 0.015, 0.889],
        0x23ab: [0.899, 0.01, 0.889],
        0x23ac: [1.16, 0.66, 0.889],
        0x23ad: [0.01, 0.899, 0.889],
        0x23b7: [0.935, 0.885, 1.056],
        0x27e8: [1.75, 1.248, 0.806],
        0x27e9: [1.75, 1.248, 0.806],
        0x3008: [1.75, 1.248, 0.806],
        0x3009: [1.75, 1.248, 0.806],
        0xe000: [0.625, 0.014, 1.056],
        0xe001: [0.605, 0.014, 1.056, { ic: 0.02 }],
        0xe150: [0.12, 0.213, 0.45, { ic: 0.01 }],
        0xe151: [0.12, 0.213, 0.45, { ic: 0.024 }],
        0xe152: [0.333, 0, 0.45, { ic: 0.01 }],
        0xe153: [0.333, 0, 0.45, { ic: 0.024 }],
        0xe154: [0.32, 0.2, 0.4, { ic: 0.01 }],
        0xe155: [0.333, 0, 0.9, { ic: 0.01 }],
        0xe156: [0.12, 0.213, 0.9, { ic: 0.01 }]
      };
      //# sourceMappingURL=tex-size4.js.map

      /***/
    },

    /***/ 90456: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.texVariant = void 0;
      exports.texVariant = {
        0x2c6: [0.845, -0.561, 2.333, { ic: 0.013 }],
        0x2dc: [0.899, -0.628, 2.333],
        0x302: [0.845, -0.561, 0, { ic: 0.013 }],
        0x303: [0.899, -0.628, 0],
        0x3f0: [0.434, 0.006, 0.667, { ic: 0.067 }],
        0x210f: [0.695, 0.013, 0.54, { ic: 0.022 }],
        0x2190: [0.437, -0.064, 0.5],
        0x2192: [0.437, -0.064, 0.5],
        0x21cc: [0.514, 0.014, 1],
        0x2204: [0.86, 0.166, 0.556],
        0x2205: [0.587, 0, 0.778],
        0x2212: [0.27, -0.23, 0.5],
        0x2216: [0.43, 0.023, 0.778],
        0x221d: [0.472, -0.028, 0.778],
        0x2223: [0.43, 0.023, 0.222],
        0x2224: [0.43, 0.023, 0.222, { ic: 0.018 }],
        0x2225: [0.431, 0.023, 0.389],
        0x2226: [0.431, 0.024, 0.389, { ic: 0.018 }],
        0x223c: [0.365, -0.132, 0.778],
        0x2248: [0.481, -0.05, 0.778],
        0x2268: [0.752, 0.284, 0.778],
        0x2269: [0.752, 0.284, 0.778],
        0x2270: [0.919, 0.421, 0.778],
        0x2271: [0.919, 0.421, 0.778],
        0x2288: [0.828, 0.33, 0.778],
        0x2289: [0.828, 0.33, 0.778],
        0x228a: [0.634, 0.255, 0.778],
        0x228b: [0.634, 0.254, 0.778],
        0x22a8: [0.694, 0, 0.611],
        0x22c5: [0.189, 0, 0.278],
        0x2322: [0.378, -0.122, 0.778],
        0x2323: [0.378, -0.143, 0.778],
        0x25b3: [0.575, 0.02, 0.722],
        0x25bd: [0.576, 0.019, 0.722],
        0x2a87: [0.801, 0.303, 0.778],
        0x2a88: [0.801, 0.303, 0.778],
        0x2acb: [0.752, 0.332, 0.778],
        0x2acc: [0.752, 0.333, 0.778]
      };
      //# sourceMappingURL=tex-variant.js.map

      /***/
    },

    /***/ 86810: /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.px =
        exports.emRounded =
        exports.em =
        exports.percent =
        exports.length2em =
        exports.MATHSPACE =
        exports.RELUNITS =
        exports.UNITS =
        exports.BIGDIMEN =
          void 0;
      exports.BIGDIMEN = 1000000;
      exports.UNITS = {
        px: 1,
        in: 96,
        cm: 96 / 2.54,
        mm: 96 / 25.4
      };
      exports.RELUNITS = {
        em: 1,
        ex: 0.431,
        pt: 1 / 10,
        pc: 12 / 10,
        mu: 1 / 18
      };
      exports.MATHSPACE = {
        veryverythinmathspace: 1 / 18,
        verythinmathspace: 2 / 18,
        thinmathspace: 3 / 18,
        mediummathspace: 4 / 18,
        thickmathspace: 5 / 18,
        verythickmathspace: 6 / 18,
        veryverythickmathspace: 7 / 18,
        negativeveryverythinmathspace: -1 / 18,
        negativeverythinmathspace: -2 / 18,
        negativethinmathspace: -3 / 18,
        negativemediummathspace: -4 / 18,
        negativethickmathspace: -5 / 18,
        negativeverythickmathspace: -6 / 18,
        negativeveryverythickmathspace: -7 / 18,
        thin: 0.04,
        medium: 0.06,
        thick: 0.1,
        normal: 1,
        big: 2,
        small: 1 / Math.sqrt(2),
        infinity: exports.BIGDIMEN
      };
      function length2em(length, size, scale, em) {
        if (size === void 0) {
          size = 0;
        }
        if (scale === void 0) {
          scale = 1;
        }
        if (em === void 0) {
          em = 16;
        }
        if (typeof length !== 'string') {
          length = String(length);
        }
        if (length === '' || length == null) {
          return size;
        }
        if (exports.MATHSPACE[length]) {
          return exports.MATHSPACE[length];
        }
        var match = length.match(
          /^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
        );
        if (!match) {
          return size;
        }
        var m = parseFloat(match[1] || '1'),
          unit = match[2];
        if (exports.UNITS.hasOwnProperty(unit)) {
          return (m * exports.UNITS[unit]) / em / scale;
        }
        if (exports.RELUNITS.hasOwnProperty(unit)) {
          return m * exports.RELUNITS[unit];
        }
        if (unit === '%') {
          return (m / 100) * size;
        }
        return m * size;
      }
      exports.length2em = length2em;
      function percent(m) {
        return (100 * m).toFixed(1).replace(/\.?0+$/, '') + '%';
      }
      exports.percent = percent;
      function em(m) {
        if (Math.abs(m) < 0.001) return '0';
        return m.toFixed(3).replace(/\.?0+$/, '') + 'em';
      }
      exports.em = em;
      function emRounded(m, em) {
        if (em === void 0) {
          em = 16;
        }
        m = (Math.round(m * em) + 0.05) / em;
        if (Math.abs(m) < 0.001) return '0em';
        return m.toFixed(3).replace(/\.?0+$/, '') + 'em';
      }
      exports.emRounded = emRounded;
      function px(m, M, em) {
        if (M === void 0) {
          M = -exports.BIGDIMEN;
        }
        if (em === void 0) {
          em = 16;
        }
        m *= em;
        if (M && m < M) m = M;
        if (Math.abs(m) < 0.1) return '0';
        return m.toFixed(1).replace(/\.0$/, '') + 'px';
      }
      exports.px = px;
      //# sourceMappingURL=lengths.js.map

      /***/
    }
  }
]);
//# sourceMappingURL=1673.a3f02b9a01a86e0d0041.js.map?v=a3f02b9a01a86e0d0041
