webpackHotUpdate(0,{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Board; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mini_card__ = __webpack_require__(19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bundles_list__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terminal__ = __webpack_require__(23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mockdata_json__ = __webpack_require__(27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mockdata_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mockdata_json__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_utils__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav__ = __webpack_require__(28);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Board = function (_Component) {\n  _inherits(Board, _Component);\n\n  function Board() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Board);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n      assetsSize: 0,\n      progress: {},\n      time: 0,\n      assets: [],\n      errors: [],\n      warnings: [],\n      modules: [],\n      performance: {}\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  Board.prototype.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n\n    socket.on('stats', function (report) {\n      _this2.setState({\n        assets: report.assets || [],\n        errors: report.errors,\n        warnings: report.warnings,\n        time: report.time / 1e3,\n        modules: report.modules,\n        performance: report.performance || {},\n        assetsSize: report.assetsSize || 'NaN'\n      });\n    });\n\n    socket.on('progress', function (data) {\n      _this2.setState({\n        progress: data\n      });\n    });\n  };\n\n  Board.prototype.render = function render(props, state) {\n    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n      'div',\n      { className: 'board' },\n      Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_7__nav__[\"a\" /* default */], null),\n      Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n        'div',\n        { className: 'row widgets' },\n        Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n          'div',\n          { className: 'col-xs-12 col-md-4 col-lg-3' },\n          state.progress ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_1__mini_card__[\"a\" /* default */], {\n            title: 'Compiler Status',\n            note: 'done in ' + state.time + ' sec',\n            progress: state.progress.percentage * 100,\n            status: state.progress.message || 'Idle',\n            color: 'fire'\n          }) : null,\n          Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_1__mini_card__[\"a\" /* default */], {\n            title: 'Error',\n            status: state.errors.length,\n            note: state.warnings.length === 0 ? 'and no warnings' : 'and ' + state.warnings.length + ' warnings',\n            color: 'berry'\n          }),\n          state.assetsSize ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_1__mini_card__[\"a\" /* default */], {\n            title: 'Total Bundles Size',\n            status: Object(__WEBPACK_IMPORTED_MODULE_6__helpers_utils__[\"a\" /* readableBytes */])(state.assetsSize),\n            note: 'too big',\n            color: 'evening'\n          }) : null\n        ),\n        Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n          'div',\n          { className: 'col-xs-12 col-md-4 col-lg-6' },\n          Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_3__terminal__[\"a\" /* default */], null)\n        ),\n        Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n          'div',\n          { className: 'col-xs-12 col-md-4 col-lg-3' },\n          Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_2__bundles_list__[\"a\" /* default */], { assets: state.assets })\n        )\n      ),\n      Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n        'div',\n        { className: 'row widgets' },\n        Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(\n          'div',\n          { className: 'col-xs-12 col-md-4 col-lg-6' },\n          Object(__WEBPACK_IMPORTED_MODULE_0_preact__[\"h\"])(__WEBPACK_IMPORTED_MODULE_4__table__[\"a\" /* default */], { data: state.modules })\n        )\n      )\n    );\n  };\n\n  return Board;\n}(__WEBPACK_IMPORTED_MODULE_0_preact__[\"Component\"]);\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/board.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./components/board.js?");

/***/ })

})