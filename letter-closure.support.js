(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["letter-closure"] = factory();
	else
		root["letter-closure"] = factory();
})(this, function() {
return webpackJsonpletter_closure([4],{

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Biyaheroes Developers
              		@email: developers@biyaheroes.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "bh-mj-letter-closure",
              			"path": "bh-mj-letter-closure/letter-closure.jsx",
              			"file": "letter-closure.jsx",
              			"module": "letter-closure",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-letter-closure.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML Letter Closure Component.
              	@end-module-documentation
              
              	@include:
              		{
              			"MJMLElement": "mjml-core",
              			"React": "react",
              			"Component": "react.Component",
              			"Column": "mjml-column",
              			"Section": "mjml-section",
              			"Text": "mjml-text",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(305);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(313);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(317);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(318);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(322);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(344);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _mjmlCore = __webpack_require__(30);
var _react = __webpack_require__(45);var _react2 = _interopRequireDefault(_react);
var _mjmlColumn = __webpack_require__(671);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(676);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(677);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _wichevr = __webpack_require__(678);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-letter-closure";

var parentTag = ["mj-container", "mj-section"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"paragraph": "" } };var




LetterClosure = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(LetterClosure, _Component);function LetterClosure() {(0, _classCallCheck3.default)(this, LetterClosure);return (0, _possibleConstructorReturn3.default)(this, (LetterClosure.__proto__ || (0, _getPrototypeOf2.default)(LetterClosure)).apply(this, arguments));}(0, _createClass3.default)(LetterClosure, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var

			paragraph = this.props.paragraph;

			paragraph = (0, _wichevr2.default)(paragraph, mjAttribute("paragraph"));

			return _react2.default.createElement(_mjmlSection2.default, (0, _extends3.default)({},
				this.props, {
					padding: "10px 0px 40px 0px" }),

				_react2.default.createElement(_mjmlColumn2.default, null,
					_react2.default.createElement(_mjmlText2.default, {
							style: {
								"padding": "0px 30px 0px 30px",
								"fontSize": "15px",
								"letterSpacing": "0.5px" } },


						paragraph)));



		} }]);return LetterClosure;}(_react.Component)) || _class;


LetterClosure.tagName = tagName;
LetterClosure.parentTag = parentTag;
LetterClosure.endingTag = endingTag;
LetterClosure.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

LetterClosure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci1jbG9zdXJlLmpzeCJdLCJuYW1lcyI6WyJ0YWdOYW1lIiwicGFyZW50VGFnIiwiZW5kaW5nVGFnIiwiZGVmYXVsdE1KTUxEZWZpbml0aW9uIiwiTGV0dGVyQ2xvc3VyZSIsIm1qQXR0cmlidXRlIiwicHJvcHMiLCJwYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBLDhCO0FBQ0EseUM7QUFDQSwyQztBQUNBLHFDOztBQUVBLGtDOztBQUVBLElBQU1BLFVBQVUsbUJBQWhCOztBQUVBLElBQU1DLFlBQVksQ0FBRSxjQUFGLEVBQWtCLFlBQWxCLENBQWxCOztBQUVBLElBQU1DLFlBQVksS0FBbEI7O0FBRUEsSUFBTUMsd0JBQXdCO0FBQzdCLFlBQVcsRUFEa0I7QUFFN0IsZUFBYztBQUNiLGVBQWEsRUFEQSxFQUZlLEVBQTlCLEM7Ozs7O0FBUU1DLGE7QUFDSTtBQUNBQyxjQURBLEdBQ2dCLEtBQUtDLEtBRHJCLENBQ0FELFdBREE7O0FBR0ZFLFlBSEUsR0FHWSxLQUFLRCxLQUhqQixDQUdGQyxTQUhFOztBQUtSQSxlQUFZLHVCQUFTQSxTQUFULEVBQW9CRixZQUFhLFdBQWIsQ0FBcEIsQ0FBWjs7QUFFQSxVQUFTO0FBQ0QsU0FBS0MsS0FESjtBQUVOLGNBQVEsbUJBRkY7O0FBSU47QUFDRTtBQUNDLGNBQVE7QUFDUCxtQkFBVyxtQkFESjtBQUVQLG9CQUFZLE1BRkw7QUFHUCx5QkFBaUIsT0FIVixFQURUOzs7QUFPR0MsZUFQSCxDQURGLENBSk0sQ0FBVDs7OztBQWdCQSxHOzs7QUFHRkgsY0FBY0osT0FBZCxHQUF3QkEsT0FBeEI7QUFDQUksY0FBY0gsU0FBZCxHQUEwQkEsU0FBMUI7QUFDQUcsY0FBY0YsU0FBZCxHQUEwQkEsU0FBMUI7QUFDQUUsY0FBY0QscUJBQWQsR0FBc0NBLHFCQUF0QyxDOztBQUVlQyxhIiwiZmlsZSI6ImxldHRlci1jbG9zdXJlLmpzeCIsInNvdXJjZVJvb3QiOiIvbW50L2MvVXNlcnMvdmluc2UvRG9jdW1lbnRzL0JpeWFoZXJvZXMvYmgvYmgtbWotbGV0dGVyLWNsb3N1cmUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcclxuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImJoLW1qLWxldHRlci1jbG9zdXJlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImJoLW1qLWxldHRlci1jbG9zdXJlL2xldHRlci1jbG9zdXJlLmpzeFwiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJsZXR0ZXItY2xvc3VyZS5qc3hcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXR0ZXItY2xvc3VyZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcclxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotbGV0dGVyLWNsb3N1cmUuZ2l0XCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEJpeWFoZXJvZXMgTUpNTCBMZXR0ZXIgQ2xvc3VyZSBDb21wb25lbnQuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJNSk1MRWxlbWVudFwiOiBcIm1qbWwtY29yZVwiLFxyXG5cdFx0XHRcIlJlYWN0XCI6IFwicmVhY3RcIixcclxuXHRcdFx0XCJDb21wb25lbnRcIjogXCJyZWFjdC5Db21wb25lbnRcIixcclxuXHRcdFx0XCJDb2x1bW5cIjogXCJtam1sLWNvbHVtblwiLFxyXG5cdFx0XHRcIlNlY3Rpb25cIjogXCJtam1sLXNlY3Rpb25cIixcclxuXHRcdFx0XCJUZXh0XCI6IFwibWptbC10ZXh0XCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIm1qbWwtc2VjdGlvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwibWptbC10ZXh0XCI7XHJcblxyXG5pbXBvcnQgd2ljaGV2ciBmcm9tIFwid2ljaGV2clwiO1xyXG5cclxuY29uc3QgdGFnTmFtZSA9IFwibWotbGV0dGVyLWNsb3N1cmVcIjtcclxuXHJcbmNvbnN0IHBhcmVudFRhZyA9IFsgXCJtai1jb250YWluZXJcIiwgXCJtai1zZWN0aW9uXCIgXTtcclxuXHJcbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xyXG5cclxuY29uc3QgZGVmYXVsdE1KTUxEZWZpbml0aW9uID0ge1xyXG5cdFwiY29udGVudFwiOiBcIlwiLFxyXG5cdFwiYXR0cmlidXRlc1wiOiB7XHJcblx0XHRcInBhcmFncmFwaFwiOiBcIlwiXHJcblx0fVxyXG59O1xyXG5cclxuQE1KTUxFbGVtZW50XHJcbmNsYXNzIExldHRlckNsb3N1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlciggKXtcclxuXHRcdGNvbnN0IHsgbWpBdHRyaWJ1dGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0bGV0IHsgcGFyYWdyYXBoIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHBhcmFncmFwaCA9IHdpY2hldnIoIHBhcmFncmFwaCwgbWpBdHRyaWJ1dGUoIFwicGFyYWdyYXBoXCIgKSApO1xyXG5cclxuXHRcdHJldHVybiAoIDxTZWN0aW9uXHJcblx0XHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHRcdFx0cGFkZGluZz1cIjEwcHggMHB4IDQwcHggMHB4XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q29sdW1uPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDMwcHggMHB4IDMwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJmb250U2l6ZVwiOiBcIjE1cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJsZXR0ZXJTcGFjaW5nXCI6IFwiMC41cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHsgcGFyYWdyYXBoIH1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0NvbHVtbj5cclxuXHRcdFx0XHQ8L1NlY3Rpb24+ICk7XHJcblx0fVxyXG59XHJcblxyXG5MZXR0ZXJDbG9zdXJlLnRhZ05hbWUgPSB0YWdOYW1lO1xyXG5MZXR0ZXJDbG9zdXJlLnBhcmVudFRhZyA9IHBhcmVudFRhZztcclxuTGV0dGVyQ2xvc3VyZS5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XHJcbkxldHRlckNsb3N1cmUuZGVmYXVsdE1KTUxEZWZpbml0aW9uID0gZGVmYXVsdE1KTUxEZWZpbml0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV0dGVyQ2xvc3VyZTtcclxuIl19

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[304]);
});
//# sourceMappingURL=letter-closure.support.js.map