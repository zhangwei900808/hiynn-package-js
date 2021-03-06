"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Demo, _Component);

  function Demo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "demo-container"
    }, _react["default"].createElement("div", {
      className: "demo-name"
    }, "this is demo page"));
  };

  return Demo;
}(_react.Component);

var _default = Demo;
exports["default"] = _default;